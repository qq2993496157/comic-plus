import type { PropType, ExtractPropTypes } from 'vue';
import { ComicSize, isString } from '../../../utils';

export const timePickerProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    required: true
  },
  rangeSeparator: {
    type: String,
    default: '/'
  },
  icon: {
    type: String,
    default: 'cu-icon-time'
  },
  size: String as PropType<ComicSize>,
  range: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  disabled: Boolean,
  clearable: Boolean
} as const;
export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;

const isValidValue = (value: string | string[]) =>
  isString(value) || (Array.isArray(value) && value.every((val) => isString(val)));

export const timePickerEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue,
  clear: () => true
};

export type TimePickerEmits = typeof timePickerEmits;
