<template>
  <teleport to="body">
    <transition name="cu-fade">
      <div
        class="cu-tooltip"
        ref="tooltipRef"
        :style="{ ...floatingStyles, zIndex }"
        :data-placement="placement"
        :class="tooltipOptions.class"
        v-if="visible">
        <span
          class="cu-tooltip__arrow"
          ref="arrowRef"
          :style="{
            left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
            top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
          }"></span>
        <span>{{ text }}</span>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch, reactive, computed } from 'vue';
import '../style/tooltip.css';
import { useEventListener } from '@vueuse/core';
import { getNextZIndex } from '../../../utils';
import { tooltipProps } from './main.props';
import { useFloating, offset, arrow, flip, autoUpdate, shift } from '@floating-ui/vue';

defineOptions({
  name: 'CuTooltip'
});

const props = defineProps(tooltipProps);
const visible = ref(false);
let timer: number | null = null;
const zIndex = ref(0);

const tooltipOptions = reactive({
  disabled: false,
  class: undefined
}) as {
  disabled: boolean;
  class: string;
};

const text = ref(props.content);
const tooltipRef = ref(null);
const arrowRef = ref(null);
const triggerRef = ref(props.triggerRef);

const middleware = computed(() => {
  return [offset(10), flip(), shift({ padding: 10 }), arrow({ element: arrowRef })];
});

const { floatingStyles, middlewareData, placement } = useFloating(triggerRef, tooltipRef, {
  placement: props.placement,
  whileElementsMounted: autoUpdate,
  middleware
});

function getTooltipAttribute() {
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
  }, 150);
}

function onmouseenter() {
  getTooltipAttribute();
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
      zIndex.value = getNextZIndex();
    }
  }
);

function update(content: string) {
  text.value = content;
}

defineExpose({ update });
</script>
