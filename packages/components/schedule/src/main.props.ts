import { ExtractPropTypes, PropType } from 'vue';
import { Schedules, Times } from './type';

export const scheduleProps = {
  schedules: Array as PropType<Schedules>,
  start: {
    type: Number as PropType<Times>,
    default: 9
  },
  end: {
    type: Number as PropType<Times>,
    default: 18
  },
  hasScheduleDays: Array as PropType<(string | number | Date)[]>
} as const;

export type ScheduleProps = ExtractPropTypes<typeof scheduleProps>;

export const scheduleEmits = {
  changeDate: (date: Date) => date instanceof Date
};

export type ScheduleEmits = typeof scheduleEmits;
