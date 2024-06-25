import type { PropType, ExtractPropTypes } from 'vue';
import { ComicSize, isString } from '../../../utils';

export const colorPickerProps = {
  modelValue: String,
  alpha: Boolean,
  format: String,
  size: String as PropType<ComicSize>,
  disabled: Boolean,
  predefine: Array as PropType<string[]>
} as const;

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;

export const colorPickerEmits = {
  ['update:modelValue']: (value: string) => isString(value),
  change: (value: string) => isString(value)
};

export type ColorPickerEmits = typeof colorPickerEmits;
