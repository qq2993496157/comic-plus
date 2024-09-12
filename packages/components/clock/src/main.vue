<template>
  <circle-clock v-if="type === 'circle'" :class="[size, shadow]" :style="clockStyle" />
  <number-clock v-else-if="type === 'number'" :class="[size, shadow]" :style="clockStyle" />
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import '../style/clock.css';
import { useNow } from '@vueuse/core';
import circleClock from './components/circle-clock.vue';
import numberClock from './components/number-clock.vue';
import { clockProps } from './main.props';
import { CLOCK_PROVIDE, COLOR_ENUM } from './type';

defineOptions({
  name: 'CuClock'
});

const props = defineProps(clockProps);

const now = useNow({ interval: 1000 });

const getTimes = computed(() => {
  return {
    hour: now.value?.getHours(),
    minute: now.value?.getMinutes(),
    second: now.value?.getSeconds()
  };
});

const clockStyle = computed(() => {
  if (!props.color) return;
  return {
    '--cu-clock-color': COLOR_ENUM.includes(props.color) ? `var(--cu-color-${props.color})` : props.color
  };
});

provide(CLOCK_PROVIDE, {
  getTimes,
  props
});
</script>
