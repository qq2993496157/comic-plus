import type { PropType, ExtractPropTypes } from 'vue';
import { isString } from '../../../utils';

export const collapseProps = {
  modelValue: [String, Array] as PropType<string[] | string>,
  accordion: Boolean,
  fill: Boolean,
  color: String,
  background: String,
  gap: {
    type: Number,
    default: 10
  }
} as const;

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

const isValidValue = (value: string | string[]) =>
  isString(value) || (Array.isArray(value) && value.every((val) => isString(val)));

export const collapseEmits = {
  ['update:modelValue']: isValidValue,
  change: isValidValue
};

export type CollapseEmits = typeof collapseEmits;
