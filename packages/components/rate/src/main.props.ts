import { ExtractPropTypes, PropType } from 'vue';
import { isNumber } from '../../../utils';

export const rateProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 5,
    validator: (value: number) => value >= 5
  },
  size: {
    type: Number,
    default: 20,
    validator: (value: number) => value >= 12
  },
  allowHalf: Boolean,
  clearable: Boolean,
  showText: Boolean,
  texts: Array as PropType<string[]>,
  icons: {
    type: [String, Array] as PropType<string | string[]>
  },
  color: {
    type: String,
    default: '#f7ba2a'
  },
  unColor: {
    type: String,
    default: '#999999'
  },
  variableIcon: Function,
  variableColor: Function,
  disabled: Boolean
} as const;

export type RateProps = ExtractPropTypes<typeof rateProps>;

export const rateEmits = {
  ['update:modelValue']: (value: number) => isNumber(value),
  change: (value: number) => isNumber(value)
};

export type RateEmits = typeof rateEmits;
