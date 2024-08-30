import type { ExtractPropTypes } from 'vue';
import { isString } from '../../../utils';

export const textareaProps = {
  modelValue: String,
  placeholder: String,
  maxlength: Number,
  autoFocus: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  // autoHeight: Boolean, //autoHeight发现隐藏bug，暂停使用
  rows: Number
} as const;
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;

export const textareaEmits = {
  ['update:modelValue']: (value: string) => isString(value),
  change: (value: string) => isString(value),
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent
};

export type TextareaEmits = typeof textareaEmits;
