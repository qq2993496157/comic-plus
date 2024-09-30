<template>
  <div
    class="cu-zone"
    ref="zoneRef"
    :class="[mode ? 'is-' + mode : undefined, { 'is-disabled': disabled }]"
    :style="{ '--cu-zone-line-weight': lineWeight + 'px' }">
    <div class="cu-zone__container cu-zone--start" :style="{ [end]: right }">
      <slot name="start"></slot>
    </div>
    <div class="cu-zone__container cu-zone--end" :style="{ [start]: left }">
      <slot name="end"></slot>
    </div>
    <div class="cu-zone__line" :style="{ [start]: left }" ref="lineRef">
      <slot name="line">
        <div class="cu-zone__defaultline"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import '../style/zone.css';
import { useEventListener } from '@vueuse/core';
import { isNumber } from '../../../utils';
import { zoneProps, zoneEmits } from './main.props';

defineOptions({
  name: 'CuZone'
});

const props = defineProps(zoneProps);
const emit = defineEmits(zoneEmits);

const lineRef = ref(null);
const zoneRef = ref(null);
const splitValue = ref(props.modelValue);

let clearMove: (() => void) | null = null,
  clearUp: (() => void) | null = null,
  clearSelect: (() => void) | null = null,
  clearDown: (() => void) | null = null;

const left = computed(() => {
  return isNumber(splitValue.value) ? splitValue.value * 100 + '%' : splitValue.value;
});
const right = computed(() => {
  return isNumber(splitValue.value) ? (1 - splitValue.value) * 100 + '%' : `calc(100% - ${splitValue.value})`;
});
const start = computed(() => (props.mode === 'horizontal' ? 'left' : 'top'));
const end = computed(() => (props.mode === 'horizontal' ? 'right' : 'bottom'));

function pxToPercent(val: number): number {
  return val / zoneRef.value?.getBoundingClientRect()[props.mode === 'horizontal' ? 'width' : 'height'];
}
function percentToPx(val: number): number {
  return val * zoneRef.value?.getBoundingClientRect()[props.mode === 'horizontal' ? 'width' : 'height'];
}

const getMax = computed<number>(() => {
  if (isNumber(splitValue.value)) {
    return isNumber(props.max) ? 1 - props.max : 1 - pxToPercent(Number(props.max.replace('px', '')));
  } else {
    return isNumber(props.max) ? percentToPx(props.max) : Number(props.max.replace('px', ''));
  }
});

const getMin = computed<number>(() => {
  if (isNumber(splitValue.value)) {
    return isNumber(props.min) ? props.min : pxToPercent(Number(props.min.replace('px', '')));
  } else {
    return isNumber(props.min) ? percentToPx(props.min) : Number(props.min.replace('px', ''));
  }
});

function onmousedown() {
  emit('drag-start');
  clearMove = useEventListener(document, 'mousemove', onmousemove);
  clearUp = useEventListener(document, 'mouseup', onmouseup);
  clearSelect = useEventListener(document, 'selectstart', (event) => {
    event.preventDefault();
  });
}

function onmouseup() {
  clearMove?.();
  clearUp?.();
  clearSelect?.();
  emit('drag-end');
}

function onmousemove(e: MouseEvent) {
  e.preventDefault();
  let val: number | string;
  let zoneRect = zoneRef.value.getBoundingClientRect();
  let offset = 0;

  if (props.mode === 'horizontal') {
    offset = e.clientX - zoneRect.left;
    if (isNumber(splitValue.value)) {
      val = offset / zoneRect.width;
      val = Math.min(val, getMax.value);
      val = Math.max(val, getMin.value);
    } else {
      offset = Math.min(offset, zoneRect.width - getMax.value);
      offset = Math.max(offset, getMin.value);
      val = offset + 'px';
    }
  } else {
    let offset = e.clientY - zoneRect.top;
    if (isNumber(splitValue.value)) {
      val = offset / zoneRect.height;
      val = Math.min(val, getMax.value);
      val = Math.max(val, getMin.value);
    } else {
      offset = Math.min(offset, zoneRect.height - getMax.value);
      offset = Math.max(offset, getMin.value);
      val = offset + 'px';
    }
  }
  splitValue.value = val;
  emit('update:modelValue', val);
  emit('drag', e);
}

watch(
  () => props.modelValue,
  (val) => {
    splitValue.value = val;
  }
);

watch(
  () => props.disabled,
  (val) => {
    if (val) {
      clearDown?.();
    } else {
      clearDown = useEventListener(lineRef, 'mousedown', onmousedown);
    }
  },
  { immediate: true }
);
</script>
