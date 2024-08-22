<template>
  <div
    class="cu-slider"
    :class="[type ? 'cu-slider--' + type : undefined, { 'is-disabled': disabled }, currentSize]"
    :style="{ '--cu-slider-color': props.color }">
    <div class="cu-slider__container" ref="containerRef" @mousedown="containerMouseDown">
      <slider-steps :steps="steps" v-if="steps > 0 && props.showStep" />
      <slider-bar />
      <slider-marks :marks="marks" v-if="marks" />
      <slider-button
        ref="sliderMinButtonRef"
        :tooltip-value="range ? props.modelValue[0] : props.modelValue"
        :model-value="sliderValue"
        @update:model-value="recordValue = $event" />
      <slider-button
        v-if="range"
        :tooltip-value="props.modelValue[1]"
        ref="sliderMaxButtonRef"
        :model-value="sliderValue2"
        @update:model-value="recordValue2 = $event" />
    </div>
    <div class="cu-slider__input" v-if="showInput && !props.range">
      <input-number
        :model-value="props.modelValue"
        @update:model-value="_emit($event)"
        :max="props.max"
        :min="props.min"
        :step="step"
        :size="currentSize" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, provide, inject, onMounted, onUpdated } from 'vue';
import '../style/slider.css';
import sliderButton from './components/slider-button.vue';
import sliderBar from './components/slider-bar';
import sliderSteps from './components/slider-steps';
import sliderMarks from './components/slider-marks';
import { CuInputNumber as InputNumber } from '../../input-number';
import { sliderEmits, sliderProps } from './main.props';
import { SLIDER_PROVIDE } from './type';
import { FORM_PROVIDE } from '../../form/src/type';
import { isArray, useConfig } from '../../../utils';

defineOptions({
  name: 'CuSlider'
});

const props = defineProps(sliderProps);
const emit = defineEmits(sliderEmits);

const form = inject(FORM_PROVIDE, undefined);
const { SIZE } = useConfig();

const sliderMinButtonRef = ref();
const sliderMaxButtonRef = ref();
const containerRef = ref();
const recordValue = ref(0);
const recordValue2 = ref(0);

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? SIZE?.value;
});

const sliderValue = computed(() => {
  let val = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
  return ((val - props.min) / offset.value) * 100;
});

const sliderValue2 = computed(() => {
  let val = isArray(props.modelValue) ? props.modelValue[1] : props.modelValue;
  return ((val - props.min) / offset.value) * 100;
});

const offset = computed(() => {
  return props.max - props.min;
});

const steps = computed(() => {
  if (props.step) {
    let val = (offset.value ?? 100) / props.step - 1;
    return Math.max(0, val);
  }
  return 0;
});

function getSliderValue(sort?: boolean) {
  let value = (recordValue.value / containerRef.value.getBoundingClientRect().width) * offset.value;
  if (props.step) {
    value = Math.round(value / props.step) * props.step;
  }
  value += props.min;
  value = Math.max(props.min, value);

  if (props.range) {
    let value2 = (recordValue2.value / containerRef.value.getBoundingClientRect().width) * offset.value;
    if (props.step) {
      value2 = Math.round(value2 / props.step) * props.step;
    }
    value2 += props.min;
    value2 = Math.max(props.min, value2);
    let rangeValue = [value, value2];
    sort && rangeValue.sort((a, b) => a - b);
    return rangeValue;
  } else {
    return value;
  }
}

function updateValue() {
  const value = getSliderValue(true);
  _emit(value);
}

function containerMouseDown(e: MouseEvent) {
  if (props.disabled) return;
  if (props.range) {
    let currentValue = e.clientX - containerRef.value.getBoundingClientRect().left;
    let val = Math.abs(recordValue.value - currentValue);
    let val2 = Math.abs(recordValue2.value - currentValue);
    if (val2 < val) {
      sliderMaxButtonRef.value.onmousedown(e);
    } else {
      sliderMinButtonRef.value.onmousedown(e);
    }
  } else {
    sliderMinButtonRef.value.onmousedown(e);
  }
}

function init() {
  let w = containerRef.value.getBoundingClientRect().width;
  if (props.range) {
    recordValue.value = ((props.modelValue[0] - props.min) / offset.value) * w;
    recordValue2.value = ((props.modelValue[1] - props.min) / offset.value) * w;
  } else {
    recordValue.value = (((props.modelValue as number) - props.min) / offset.value) * w;
  }
}

function _emit(value: number | number[]) {
  emit('update:modelValue', value);
  emit('change', value);
}

watch([recordValue, recordValue2], (val) => {
  const value = getSliderValue();
  _emit(value);
});

provide(SLIDER_PROVIDE, {
  props,
  containerRef,
  sliderValue,
  sliderValue2,
  updateValue
});

onMounted(() => {
  init();
});
onUpdated(() => {
  init();
});
</script>
