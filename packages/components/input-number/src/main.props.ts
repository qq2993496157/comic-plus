import type { ExtractPropTypes, PropType } from 'vue';
import { ComicSize, isNumber } from '../../../utils';

export const inputNumberProps = {
  modelValue: Number,
  size: String as PropType<ComicSize>,
  min: Number,
  max: Number,
  step: {
    type: Number,
    default: 1
  },
  disabled: Boolean
} as const;

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;

export const inputNumberEmits = {
  ['update:modelValue']: (value: number) => isNumber(value),
  change: (value: number) => isNumber(value),
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent
};

export type InputNumberEmits = typeof inputNumberEmits;
