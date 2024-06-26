<template>
  <teleport to="body">
    <transition name="cu-fade">
      <div class="cu-tooltip" :class="[className, tooltipOptions.class]" :style="style" v-if="visible" ref="tooltipRef">
        <span class="cu-tooltip__arrow"></span>
        <span>{{ text }}</span>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch, reactive, nextTick, onMounted } from 'vue';
import '../style/tooltip.css';
import { useEventListener } from '@vueuse/core';
import { getNextZIndex, useScrollSever } from '../../../utils';
import { tooltipProps, type Position, calcPosition } from './main.props';
defineOptions({
  name: 'CuTooltip'
});

const props = defineProps(tooltipProps);
const visible = ref(false);
const className = ref(props.position);
let timer: number | null = null;

const style = reactive({
  left: '0px',
  top: '0px',
  zIndex: 2000
});
const tooltipOptions = reactive({
  disabled: false,
  class: undefined
}) as {
  disabled: boolean;
  class: string;
};

const text = ref(props.content);
const tooltipRef = ref<HTMLElement>();

function getPosition() {
  if (!visible.value) return;
  const parent = props.triggerRef?.getBoundingClientRect();
  const target = tooltipRef.value.getBoundingClientRect();

  const { x, y } = calcPosition[className.value]?.(target, parent);

  style.left = x + 'px';
  style.top = y + 'px';
}

function getTooltipStyle() {
  let el = props.triggerRef;
  let disabled = el.getAttribute('tooltip-disabled');
  let className = el.getAttribute('tooltip-class');

  tooltipOptions.disabled = disabled === 'false' ? false : !!disabled;
  tooltipOptions.class = className;
}

function onmouseleave() {
  timer = setTimeout(() => {
    visible.value = false;
    clearTime();
  }, 300);
}

function onmouseenter() {
  getTooltipStyle();
  const { disabled } = tooltipOptions;
  if (disabled) return;
  clearTime();
  visible.value = true;
}

function clearTime() {
  clearTimeout(timer);
  timer = null;
}

useEventListener(tooltipRef, 'mouseenter', onmouseenter);
useEventListener(tooltipRef, 'mouseleave', onmouseleave);
useEventListener(props.triggerRef, 'mouseenter', onmouseenter);
useEventListener(props.triggerRef, 'mouseleave', onmouseleave);

watch(
  () => visible.value,
  (val) => {
    if (val) {
      nextTick(() => {
        getPosition();
        style.zIndex = getNextZIndex();
      });
    }
  }
);

function update(content: string, position?: Position) {
  text.value = content;
  if (position) {
    className.value = position;
  }
}

onMounted(() => {
  useScrollSever(props.triggerRef, getPosition);
});

defineExpose({ update });
</script>
