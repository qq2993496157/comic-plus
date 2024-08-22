<template>
  <div class="cu-schedule">
    <calendar ref="calendarRef">
      <template #calendar v-if="$slots['calendar']">
        <slot name="calendar" />
      </template>
    </calendar>
    <content>
      <template #header="{ date }" v-if="$slots['header']">
        <slot name="header" :date="date" />
      </template>
      <template #card="{ data }" v-if="$slots['card']">
        <slot name="card" :data="data" />
      </template>
    </content>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import '../style/schedule.css';
import Calendar from './calendar.vue';
import content from './content.vue';
import { SCHEDULE_PROVIDE } from './type';
import { scheduleEmits, scheduleProps } from './main.props';

defineOptions({
  name: 'CuSchedule'
});

const props = defineProps(scheduleProps);
const emit = defineEmits(scheduleEmits);

const date = ref(new Date());
const calendarRef = ref();

watch(date, (val) => {
  emit('changeDate', val);
});

provide(SCHEDULE_PROVIDE, {
  date,
  props
});

function selectDate(value) {
  calendarRef.value?.selectDate(value);
}

defineExpose({
  selectDate
});
</script>
