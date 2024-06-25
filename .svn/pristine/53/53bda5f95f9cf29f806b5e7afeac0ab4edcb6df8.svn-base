import type { ExtractPropTypes, PropType } from 'vue';
import { ComicSize, isBoolean } from '../../../utils';

export const radioProps = {
  modelValue: [String, Number] as PropType<string | number>,
  label: String,
  value: [String, Number] as PropType<string | number>,
  disabled: Boolean,
  activeColor: String,
  size: String as PropType<ComicSize>
} as const;

export type RadioProps = ExtractPropTypes<typeof radioProps>;

export const radioEmits = {
  ['update:modelValue']: (val: string | number) => ['string', 'number'].includes(typeof val),
  change: (value: boolean) => isBoolean(value)
};

export type RadioEmits = typeof radioEmits;
