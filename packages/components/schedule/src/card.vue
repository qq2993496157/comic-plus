<template>
  <div :style="cardStyle" ref="cardRef" :class="{ fold: isFold }" class="cu-schedule-cards">
    <div
      v-for="(card, idx) in data.children"
      class="cu-schedule-card"
      :class="{ 'is-shadow': injectProps.cardShadow }"
      :style="{
        ...cardStyleFn(card),
        '--x': 0 - tr * idx + 'px',
        backgroundColor: `var(--cu-color-${colors[card._index % 4]})`
      }"
      :key="card.time + idx">
      <slot name="card" :data="card">
        <component v-if="isVNode(card.content!)" :is="card.content!"></component>
        <template v-else>
          <div class="cu-schedule-defaultcard">
            <div class="cu-schedule-defaultcard__content">
              {{ card.content! }}
            </div>
            <div class="timer">{{ card.time }}</div>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, isVNode, nextTick, ref, watch } from 'vue';
import { SCHEDULE_PROVIDE } from './type';
import { useElementSize } from '@vueuse/core';
import { debounce } from '../../../utils';

defineOptions({
  name: 'CuScheduleCards'
});

const props = defineProps({
  data: Object
});

const { props: injectProps, spacing } = inject(SCHEDULE_PROVIDE);

const colors = ['primary', 'success', 'warning', 'danger'];

const cardRef = ref();
const isFold = ref(cardRef.value?.scrollWidth > cardRef.value?.offsetWidth);
const tr = ref(0);

const maxHeight = computed(() => {
  return (injectProps.end + 1 - injectProps.start) * spacing.value;
});

const startTime = computed(() => {
  return Math.max(props.data.startTime, injectProps.start);
});

const endTime = computed(() => {
  return Math.min(props.data.endTime, injectProps.end + 1);
});

const getMaxPx = (number) => {
  return Math.min(Math.max(number, 0), maxHeight.value);
};

const updateDebounceFold = debounce(updateFold);

const cardStyle = computed(() => {
  return {
    top: getMaxPx((startTime.value - injectProps.start) * spacing.value) + 'px',
    height: Math.min((endTime.value - startTime.value) * spacing.value, maxHeight.value) + 'px'
  };
});

function cardStyleFn(card) {
  return {
    marginTop: getMaxPx((card.getTimes[0] - startTime.value) * spacing.value) + 'px',
    marginBottom: getMaxPx((endTime.value - card.getTimes[1]) * spacing.value) + 'px'
  };
}

function updateFold() {
  isFold.value = cardRef.value?.scrollWidth > cardRef.value?.offsetWidth;
  let sum = (cardRef.value?.scrollWidth - cardRef.value?.offsetWidth) / (props.data.children.length - 1);
  tr.value = isNaN(sum) ? 0 : sum;
}

const { width, height } = useElementSize(cardRef);

watch([width, height], () => {
  nextTick(updateDebounceFold);
});
</script>
