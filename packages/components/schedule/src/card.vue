<template>
  <div :style="cardStyle" ref="cardRef" :class="{ fold: isFold }" class="cu-schedule-cards">
    <div
      v-for="(card, idx) in data.children"
      class="cu-schedule-card"
      :style="{ ...cardStyleFn(card), '--x': 0 - tr * idx + 'px' }"
      :key="card.time">
      <slot name="card" :data="card">
        <component v-if="isVNode(card.content)" :is="card.content"></component>
        <template v-else>
          <div class="cu-schedule-defaultcard" :style="{ backgroundColor: `var(--cu-color-${colors[idx % 4]})` }">
            <div class="cu-schedule-defaultcard__content">
              {{ card.content }}
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

const { props: injectProps } = inject(SCHEDULE_PROVIDE);

const colors = ['primary', 'success', 'warning', 'danger'];

const cardRef = ref();
const isFold = ref(cardRef.value?.scrollWidth > cardRef.value?.offsetWidth);
const tr = ref(0);
const updateDebounceFold = debounce(updateFold);

const cardStyle = computed(() => {
  return {
    top: (props.data.startTime - injectProps.start) * 100 + 'px',
    height: (props.data.endTime - props.data.startTime) * 100 + 'px'
  };
});

function cardStyleFn(card) {
  return {
    marginTop: (card.getTimes[0] - props.data.startTime) * 100 + 'px',
    marginBottom: (props.data.endTime - card.getTimes[1]) * 100 + 'px'
  };
}

function updateFold() {
  isFold.value = cardRef.value?.scrollWidth > cardRef.value?.offsetWidth;
  tr.value = (cardRef.value?.scrollWidth - cardRef.value?.offsetWidth) / (props.data.children.length - 1);
}

const { width, height } = useElementSize(cardRef);

watch([width, height], () => {
  nextTick(updateDebounceFold);
});
</script>
