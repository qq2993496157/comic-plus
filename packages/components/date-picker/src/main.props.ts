import type { PropType, ExtractPropTypes } from 'vue';
import type { ValueType, Shortcut } from './type';
import { isArray, isString, isNumber, type ComicSize } from '../../../utils';

export const datePickerProps = {
  modelValue: {
    type: [Date, String, Number, Array] as PropType<ValueType>,
    required: true
  },
  format: {
    type: String,
    default: 'yyyy-MM-dd'
  },
  valueFormat: {
    type: String as PropType<'date' | 'string' | 'number'>,
    default: 'date'
  },
  rangeSeparator: {
    type: String,
    default: '/'
  },
  size: String as PropType<ComicSize>,
  range: Boolean,
  icon: {
    type: String,
    default: 'cu-icon-calendar'
  },
  shortcuts: Array as PropType<Shortcut[]>,
  disabled: Boolean,
  placeholder: String,
  clearable: Boolean,
  startPlaceholder: String,
  endPlaceholder: String,
  disabledDate: Function
} as const;

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;

const isValidValue = (value: ValueType) =>
  isString(value) ||
  isNumber(value) ||
  value instanceof Date ||
  (isArray(value) && value.every((val) => isString(val) || isNumber(val) || val instanceof Date));

export const datePickerEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue,
  clear: () => true
};

export type DatePickerEmits = typeof datePickerEmits;
