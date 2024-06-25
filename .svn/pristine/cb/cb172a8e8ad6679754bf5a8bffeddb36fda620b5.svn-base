<template>
  <div class="cu-time-picker__listbox" style="height: 210px">
    <cu-scrollbar @scroll="onScroll($event, 0)" ref="hourRef">
      <div class="cu-time-picker__list">
        <span
          v-for="(item, idx) in 24"
          :class="{ active: Number(actives[0]) === idx }"
          @click="itemHandClick(idx, 0)"
          >{{ repairZero(item - 1) }}</span
        >
      </div>
    </cu-scrollbar>
    <cu-scrollbar @scroll="onScroll($event, 1)" ref="minuteRef" style="height: 210px">
      <div class="cu-time-picker__list">
        <span
          v-for="(item, idx) in 60"
          :class="{ active: Number(actives[1]) === idx }"
          @click="itemHandClick(idx, 1)"
          >{{ repairZero(item - 1) }}</span
        >
      </div>
    </cu-scrollbar>
    <cu-scrollbar @scroll="onScroll($event, 2)" ref="secondRef" style="height: 210px">
      <div class="cu-time-picker__list">
        <span
          v-for="(item, idx) in 60"
          :class="{ active: Number(actives[2]) === idx }"
          @click="itemHandClick(idx, 2)"
          >{{ repairZero(item - 1) }}</span
        >
      </div>
    </cu-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, inject, reactive } from 'vue';
import { CuScrollbar } from '../../scrollbar';
import { repairZero, debounce } from '../../../utils';
import { listProps, listEmits } from './list.props';
import { TIMEPICKER_PROVIDE } from './type';

const props = defineProps(listProps);
const emit = defineEmits(listEmits);

const { show } = inject(TIMEPICKER_PROVIDE);

const timeValue = ref(props.time);

const hourRef = ref(null);
const minuteRef = ref(null);
const secondRef = ref(null);

const refEnum = reactive({
  0: {
    refs: hourRef,
    stopScrollTop: 0
  },
  1: {
    refs: minuteRef,
    stopScrollTop: 0
  },
  2: {
    refs: secondRef,
    stopScrollTop: 0
  }
});

const scrollTop = ref(0);

const actives = computed(() => {
  return timeValue.value?.split(':') ?? [];
});

const onScroll = (e: Event, span: number) => {
  setScroll(e, span);
  scrollTop.value = (<HTMLElement>e.target).scrollTop;
};

const setScroll = debounce((e: Event, span: number) => {
  let top = (<HTMLElement>e.target).scrollTop;
  refEnum[span].stopScrollTop = top;
  if (scrollTop.value === refEnum[span].stopScrollTop) {
    let scrollTop = Math.floor(top / 30) * 30;
    let idx = Math.floor(scrollTop / 30);
    itemHandClick(idx, span);
  }
}, 20);

function itemHandClick(idx: number, span: number) {
  let arr = timeValue.value.split(':');
  arr[span] = repairZero(idx);
  timeValue.value = arr.join(':');
  refEnum[span]?.refs.setBarTop(idx * 30);
}

function getTimeValueArray() {
  let arr = timeValue.value.split(':');
  while (arr.length < 3) {
    arr.push('00');
  }
  return arr;
}

watch(
  () => show.value,
  (val) => {
    if (val) {
      timeValue.value = props.time ? props.time : '00:00:00';
      nextTick(() => {
        const times = getTimeValueArray();
        times.forEach((time, idx) => {
          let top = Number(time) * 30;
          refEnum[idx]?.refs.setBarTop(top, 'auto');
        });
      });
    }
  }
);

defineExpose({ timeValue });
</script>
