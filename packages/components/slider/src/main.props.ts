import type { PropType, ExtractPropTypes } from 'vue';
import { ComicType, Arrayable, ComicSize, isArray, isNumber } from '../../../utils';
import type { Marks } from './type';

export const sliderProps = {
  modelValue: [Number, Array] as PropType<number | number[]>,
  type: {
    type: String as PropType<ComicType>,
    default: 'primary'
  },
  size: String as PropType<ComicSize>,
  color: String,
  range: Boolean,
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: Boolean,
  showStep: Boolean,
  disabled: Boolean,
  marks: Object as PropType<Marks>,
  showTooltip: {
    type: Boolean,
    default: true
  },
  formatTooltip: Function as PropType<(value: number) => string>
} as const;

export type SliderProps = ExtractPropTypes<typeof sliderProps>;

const isValidValue = (value: Arrayable<number>) => isNumber(value) || (isArray(value) && value.every(isNumber));

export const sliderEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue
};

export type SliderEmits = typeof sliderEmits;
