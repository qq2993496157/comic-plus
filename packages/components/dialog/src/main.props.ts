import type { ExtractPropTypes } from 'vue';
import { isBoolean } from '../../../utils';

export const dialogProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  transitionClass: {
    type: String,
    default: 'cross-scale'
  },
  header: String,
  width: {
    type: String,
    default: '70%'
  },
  top: {
    type: String,
    default: '15vh'
  },
  color: {
    type: String,
    default: '#ffffff'
  },
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  appendToBody: Boolean,
  customClass: String,
  modeClass: String
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export const dialogEmits = {
  ['update:modelValue']: (value: boolean) => isBoolean(value),
  close: () => true,
  open: () => true
};

export type DialogEmits = typeof dialogEmits;
