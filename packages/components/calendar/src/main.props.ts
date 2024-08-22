import { ExtractPropTypes, PropType } from 'vue';
import { ComicSize } from '../../../utils';

export const calendarProps = {
  modelValue: Date,
  size: String as PropType<ComicSize>,
  showWeek: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  }
} as const;

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;

export const calendarEmits = {
  'update:modelValue': (date: Date) => date instanceof Date,
  change: (date: Date) => date instanceof Date
};

export type CalendarEmits = typeof calendarEmits;
