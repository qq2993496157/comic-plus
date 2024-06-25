import type { PropType, ExtractPropTypes } from 'vue';
import type { ArrayMix, ComicSize } from '../../../utils';

export const checkboxGroupProps = {
  modelValue: Array as PropType<ArrayMix<string | number>>,
  size: String as PropType<ComicSize>
} as const;

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

export const checkboxGroupEmits = {
  ['update:modelValue']: (val: ArrayMix<string | number>) => Array.isArray(val),
  change: (val: ArrayMix<string | number>) => Array.isArray(val)
};

export type CheckboxGroupEmits = typeof checkboxGroupEmits;
