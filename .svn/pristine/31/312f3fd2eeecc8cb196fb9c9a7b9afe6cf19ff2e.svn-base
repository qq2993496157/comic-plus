import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicSize } from '../../../utils';

export const radioGroupProps = {
  modelValue: [String, Number] as PropType<string | number>,
  size: String as PropType<ComicSize>
} as const;

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

export const radioGroupEmits = {
  ['update:modelValue']: (val: string | number) => ['string', 'number'].includes(typeof val),
  change: (val: string | number) => ['string', 'number'].includes(typeof val)
};

export type RadioGroupEmits = typeof radioGroupEmits;
