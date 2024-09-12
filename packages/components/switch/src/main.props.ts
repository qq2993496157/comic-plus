import type { PropType, ExtractPropTypes, Component } from 'vue';
import type { ComicSize } from '../../../utils';

export const switchProps = {
  modelValue: [Boolean, String, Number] as PropType<boolean | string | number>,
  onText: String,
  offText: String,
  onValue: [String, Number] as PropType<string | number>,
  offValue: [String, Number] as PropType<string | number>,
  onColor: String,
  offColor: String,
  disabled: Boolean,
  square: Boolean,
  inlineText: Boolean,
  onIcon: [String, Object] as PropType<string | Component>,
  offIcon: [String, Object] as PropType<string | Component>,
  beforeChange: Function as PropType<() => boolean | Promise<any>>,
  loading: Boolean,
  size: String as PropType<ComicSize>
} as const;

export type SwitchProps = ExtractPropTypes<typeof switchProps>;

export const switchEmits = {
  ['update:modelValue']: (val: boolean | string | number) => ['boolean', 'string', 'number'].includes(typeof val),
  change: (val: boolean | string | number) => ['boolean', 'string', 'number'].includes(typeof val)
};

export type SwitchEmits = typeof switchEmits;
