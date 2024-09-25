<template>
  <div v-if="props.range">
    <div class="rangetime-box">
      <div class="time-title">开始时间</div>
      <list :time="props.modelValue[0]" ref="listRef1" />
    </div>
    <div class="rangetime-box">
      <div class="time-title">结束时间</div>
      <list :time="props.modelValue[1]" ref="listRef2" />
    </div>
  </div>
  <list v-else :time="(props.modelValue as string)" ref="listRef" />

  <div class="cu-time-picker__footer">
    <cu-button size="small" type="primary" text @click="_confirm">确认</cu-button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import list from './list.vue';
import { CuButton } from '../../button';
import { TIMEPICKER_PROVIDE } from './type';

const { props, confirm } = inject(TIMEPICKER_PROVIDE);

const listRef = ref(null);
const listRef1 = ref(null);
const listRef2 = ref(null);

function _confirm() {
  if (props.range) {
    let arr = [listRef1.value.timeValue, listRef2.value.timeValue];
    confirm(arr);
  } else {
    confirm(listRef.value.timeValue);
  }
}
</script>
