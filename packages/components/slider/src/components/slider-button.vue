<template>
  <div class="cu-slider__button-wrapper" :style="{ left: modelValue + '%' }">
    <div
      class="cu-slider__button"
      @mouseenter="isMouseEnter = true"
      @mouseleave="isMouseEnter = false"
      @mousedown="onmousedown"></div>
    <template v-if="injectProps.showTooltip">
      <transition name="cu-fade">
        <div class="cu-slider__tooltip" v-show="isMouseEnter || isMouseDown">
          {{ formatValue }}
        </div>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSliderButton } from './use-button';
import { isNumber } from '../../../../utils';

defineOptions({
  name: 'CuSliderButton'
});

const props = defineProps({
  modelValue: Number,
  tooltipValue: Number
});
const emit = defineEmits({
  'update:modelValue': (val: number) => isNumber(val)
});

const { injectProps, isMouseEnter, isMouseDown, recordValue, onmousedown, onmousemove } = useSliderButton(props, emit);

const formatValue = computed(() => {
  if (injectProps.formatTooltip) {
    return injectProps.formatTooltip(props.tooltipValue);
  } else {
    return props.tooltipValue;
  }
});

defineExpose({
  recordValue,
  onmousemove,
  onmousedown
});
</script>
