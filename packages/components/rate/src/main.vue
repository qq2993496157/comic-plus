<template>
  <div class="cu-rate" :class="{ 'read-only': disabled }">
    <div class="cu-rate__container" ref="rateContainerRef" :style="{ fontSize: calcRateSize + 'px' }">
      <cu-rate-item v-for="idx in count" :current="idx" @click="itemHandleClick"></cu-rate-item>
    </div>
    <span v-if="showText" class="cu-rate__text" :style="{ color: disabled ? activeColor : undefined }">
      <slot name="text" :value="activeIdx"> {{ textContent }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch, watchEffect } from 'vue';
import '../style/rate.css';
import { useMouseInElement } from '@vueuse/core';
import CuRateItem from './item.vue';
import { rateProps, rateEmits } from './main.props';
import { RATE_PROVIDE } from './type';

defineOptions({
  name: 'CuRate'
});

const props = defineProps(rateProps);
const emit = defineEmits(rateEmits);

const rateContainerRef = ref(null);
const activeIdx = ref(props.modelValue);
var unwatch: () => void;

const { elementX, isOutside } = useMouseInElement(rateContainerRef);

watch(
  () => props.disabled,
  (val) => {
    if (val) {
      unwatch?.();
    } else {
      unwatch = watchEffect(changeIdx);
    }
  },
  { immediate: true }
);

const calcRateSize = computed(() => {
  return Math.max(props.size, 12);
});

const textContent = computed(() => {
  return props.texts
    ? props.texts[activeIdx.value - 1]
    : activeIdx.value === 0 && isOutside.value
    ? undefined
    : activeIdx.value + '星';
});

function changeIdx() {
  activeIdx.value = isOutside.value ? props.modelValue : getCurrentValue();
}

function getCurrentValue() {
  if (props.allowHalf) {
    return Math.min(props.count, (Math.floor(elementX.value / ((calcRateSize.value + 4) / 2)) + 1) * 0.5);
  } else {
    return Math.min(props.count, Math.floor(elementX.value / (calcRateSize.value + 4)) + 1);
  }
}

function itemHandleClick() {
  let val = getCurrentValue();
  val = props.clearable ? (val === props.modelValue ? 0 : val) : val;
  emit('update:modelValue', val);
}

const activeColor = computed(() => {
  return props.variableColor?.(activeIdx.value) ?? props.color;
});

provide(RATE_PROVIDE, {
  props,
  activeIdx,
  activeColor
});
</script>
