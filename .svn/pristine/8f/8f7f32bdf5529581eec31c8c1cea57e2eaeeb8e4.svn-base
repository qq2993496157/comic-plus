import type { PropType, ExtractPropTypes } from 'vue';
import { type ComicSize, type Arrayable, isArray } from '../../../utils';

export const selectProps = {
  modelValue: [String, Number, Array] as PropType<Arrayable<string | number>>,
  multiple: Boolean,
  size: String as PropType<ComicSize>,
  disabled: Boolean,
  clearable: Boolean,
  placeholder: String
} as const;

export type SelectProps = ExtractPropTypes<typeof selectProps>;

const isValidValue = (value: Arrayable<string | number>) =>
  ['string', 'number'].includes(typeof value) ||
  (isArray(value) && value.every((value) => ['string', 'number'].includes(typeof value)));

export const selectEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue,
  clear: () => true
};
export type SelectEmits = typeof selectEmits;
