<template>
  <div class="cu-schedule-content">
    <div class="cu-schedule-content__header">
      <slot :date="date" name="header">
        <span> <i class="cu-icon-calendar"></i> 日程计划 </span>
        <span>
          <span>{{ formatDate(date, 'yyyy-MM-dd') }}</span>
        </span>
      </slot>
    </div>
    <div class="cu-schedule-list--warpper">
      <ul class="cu-schedule-list">
        <li v-for="el in timeList" class="cu-schedule-list__li">
          <span class="cu-schedule-list__time">{{ (el.key < 10 ? '0' + el.key : el.key) + ':00' }}</span>
          <span class="cu-schedule-list__line"></span>
        </li>
        <div class="cu-schedule-cards--warpper">
          <schedule-cards v-for="(item, idx) in cardForArr" :data="item" :key="idx">
            <template #card="{ data }" v-if="$slots['card']">
              <slot name="card" :data="data" />
            </template>
          </schedule-cards>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { SCHEDULE_PROVIDE } from './type';
import ScheduleCards from './card.vue';
import { formatDate } from '../../../utils';

const { date, props } = inject(SCHEDULE_PROVIDE);

const flag = 100 / 60;

const timeList = computed(() => {
  let result = [];
  let i = props.start;
  do {
    if (i > 23) {
      i -= 24;
    }
    result.push({
      key: i,
      timeTemp: date.value.setHours(i, 0, 0, 0)
    });
    i++;
    if (i === 24) {
      i = 0;
    }
  } while (!(i === props.end + 1));
  return result;
});

function getNumber(t) {
  let t1 = Math.floor(t);
  let t2 = (t % 1) * flag;
  return t1 + t2;
}

const cardForArr = computed(() => {
  let arr = props.schedules ?? [];
  arr = arr
    .map((v) => {
      v.getTimes = v.time.split('~').map((v) => {
        return getNumber(Number(v.replace(/:/g, '.')));
      });
      return v;
    })
    .sort((a, b) => {
      return a.getTimes[0] - b.getTimes[0];
    });
  let chunkArr = [];

  if (arr.length > 0) {
    chunkArr = [
      {
        startTime: arr[0].getTimes[0],
        endTime: arr[0].getTimes[1],
        children: [arr[0]]
      }
    ];
    for (let i = 1; i < arr.length; i++) {
      let item = arr[i];
      let last = chunkArr[chunkArr.length - 1];
      if (item.getTimes[0] <= last.endTime) {
        last.children.push(item);
        last.endTime = Math.max(last.endTime, item.getTimes[1]);
      } else {
        chunkArr.push({
          startTime: item.getTimes[0],
          endTime: item.getTimes[1],
          children: [item]
        });
      }
    }
  }

  return chunkArr;
});
</script>
