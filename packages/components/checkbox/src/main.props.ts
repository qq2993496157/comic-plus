import type { ExtractPropTypes, PropType } from 'vue';
import { ComicSize } from '../../../utils';

export const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: false
  },
  value: [String, Number] as PropType<string | number>,
  falseValue: [String, Number] as PropType<string | number>,
  label: String,
  indeterminate: {
    type: Boolean,
    default: () => {
      return null;
    }
  },
  disabled: Boolean,
  color: String,
  size: String as PropType<ComicSize>
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export const checkboxEmits = {
  ['update:modelValue']: (evt: boolean | string | number) => ['boolean', 'string', 'number'].includes(typeof evt),
  change: (evt: boolean | string | number) => ['boolean', 'string', 'number'].includes(typeof evt)
};

export type CheckboxEmits = typeof checkboxEmits;
