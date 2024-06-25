import type { PropType, ExtractPropTypes } from 'vue';
import { type ComicType, type Arrayable, isArray, isNumber } from '../../../utils';

export const sliderProps = {
  modelValue: {
    type: [Number, Array] as PropType<number | number[]>,
    required: true
  },
  type: String as PropType<ComicType>,
  color: String,
  range: Boolean,
  max: {
    type: Number,
    default: 100,
    validator(value: number) {
      return value >= 1;
    }
  },
  min: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },
  step: {
    type: Number,
    default: () => {
      return 0;
    }
  },
  showStep: Boolean,
  disabled: Boolean
} as const;

export type SliderProps = ExtractPropTypes<typeof sliderProps>;

const isValidValue = (value: Arrayable<number>) => isNumber(value) || (isArray(value) && value.every(isNumber));

export const sliderEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue,
  input: isValidValue
};

export type SliderEmits = typeof sliderEmits;
