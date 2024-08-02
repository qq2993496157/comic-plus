<template>
  <li class="cu-timeline-item" :class="{ 'is-reverse': injectProps.cross && reverse }">
    <div class="cu-timeline__axle">
      <slot name="dot">
        <i v-if="icon" :class="icon" :style="{ color }"></i>
        <div v-else class="cu-timeline__dot" :class="{ fill }" :style="{ '--cu-timeline-dotcolor': color }"></div>
      </slot>
      <div class="cu-timeline__line" :class="{ dashed: dashedLine }"></div>
    </div>

    <div class="cu-timeline__content" :class="injectProps.timePosition">
      <div class="cu-timeline__timestamp" v-if="injectProps.timePosition === 'top' && time">{{ time }}</div>
      <slot></slot>
      <div class="cu-timeline__timestamp" v-if="injectProps.timePosition === 'bottom' && time">{{ time }}</div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { timelineItemProps } from './item.props';
import { TIMELINE_PROVIDE } from './type';

defineOptions({
  name: 'CuTimelineItem'
});

defineProps(timelineItemProps);

const { props: injectProps } = inject(TIMELINE_PROVIDE);
</script>
