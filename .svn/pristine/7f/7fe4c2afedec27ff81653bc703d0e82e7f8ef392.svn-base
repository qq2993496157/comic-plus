import type { PropType, ExtractPropTypes } from 'vue';
import type { ComicSize } from '../../../utils';

export const inputProps = {
  modelValue: [String, Number] as PropType<string | number>,
  size: String as PropType<ComicSize>,
  prefixIcon: String,
  suffixIcon: String,
  clearable: Boolean,
  placeholder: String,
  type: String,
  disabled: Boolean
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;

export const inputEmits = {
  ['update:modelValue']: (val: string | number) => ['string', 'number'].includes(typeof val),
  change: (val: string | number) => ['string', 'number'].includes(typeof val),
  input: (val: string | number) => ['string', 'number'].includes(typeof val),
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent
};

export type InputEmits = typeof inputEmits;
