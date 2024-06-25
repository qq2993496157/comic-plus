<template>
  <div class="cu-progress" :class="barType ? 'is-' + barType : undefined" :style="style">
    <!-- 线性 -->
    <template v-if="barType === 'line' || barType === 'line-trends'">
      <div class="cu-progress__inner">
        <div class="cu-progress__bar" :style="barsStyle">
          <div class="cu-progress__describe" v-if="insetFormat && showText">
            <span v-if="format">{{ format }}</span>
            <span v-else-if="STATUS[status]" :class="[STATUS[status], status]"></span>
            <span v-else>{{ schedule + '%' }}</span>
          </div>
        </div>
      </div>
    </template>
    <!-- 圆环 -->
    <template v-else-if="barType === 'circle'">
      <svg
        :width="size"
        :height="size"
        :style="{
          '--cu-progress-strokewidth': barWidth,
          '--cu-progress-dasharray': circleLength,
          '--cu-progress-dashoffset': circleLength - (schedule / 100) * circleLength + 1
        }">
        <circle class="cu-progress__circle_bg" cx="50%" cy="50%" r="47%" style="z-index: 1"></circle>
        <circle ref="circleRef" class="cu-progress__circle" cx="50%" cy="50%" r="47%" style="z-index: 2"></circle>
      </svg>
    </template>
    <!-- 水波 -->
    <template v-else-if="barType === 'trends'">
      <div class="cu-progress__inner">
        <div
          class="cu-progress__bar"
          :style="{
            width: size + 'px',
            height: size + 'px',
            '--cu-progress-dashoffset': (schedule === 0 ? -10 : schedule === 100 ? 110 : schedule) + '%'
          }"></div>
      </div>
    </template>
    <!-- 描述文本 -->
    <div
      class="cu-progress__describe"
      :style="{
        color: barType === 'trends' && schedule > 50 ? '#fff' : undefined
      }"
      v-if="!insetFormat && showText">
      <span v-if="format">{{ format }}</span>
      <span v-else-if="STATUS[status]" :class="[STATUS[status], status]"></span>
      <span v-else>{{ schedule + '%' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import '../style/progress.css';
import { isString, isFunction } from '../../../utils';
import { progressProps, STATUS } from './main.props';
defineOptions({
  name: 'CuProgress'
});
const props = defineProps(progressProps);
const circleRef = ref();
const circleLength = ref(0);

const style = computed(() => {
  return {
    '--cu-progress-color': computedColor.value ?? `var(--cu-color-${props.type || 'primary'})`
  };
});
const computedColor = computed(() => {
  if (!props.colors) return undefined;
  if (isString(props.colors)) return props.colors;
  if (isFunction(props.colors)) return props.colors(schedule.value);
  for (const key in props.colors) {
    if (schedule.value <= Number(key)) {
      return props.colors[key];
    }
  }
  return undefined;
});
const schedule = computed(() => {
  return props.progress <= 0 ? 0 : props.progress >= 100 ? 100 : props.progress;
});
const barsStyle = computed(() => {
  return {
    width: schedule.value + '%',
    height: props.barWidth ? props.barWidth + 'px' : undefined,
    animationDuration: Math.floor(schedule.value / 3) + 's'
  };
});

onMounted(() => {
  if (props.barType === 'circle') {
    circleLength.value = circleRef.value.getTotalLength() + 1;
  }
});
</script>
