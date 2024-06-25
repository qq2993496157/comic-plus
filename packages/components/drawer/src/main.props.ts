import type { ExtractPropTypes, PropType } from 'vue';
import { isBoolean } from '../../../utils';

export const drawerProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String as PropType<'left' | 'top' | 'right' | 'bottom'>,
    default: 'right'
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  header: String,
  dimension: {
    type: String,
    default: '30%'
  },
  color: String,
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  customClass: String,
  modeClass: String
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;

export const drawerEmits = {
  ['update:modelValue']: (value: boolean) => isBoolean(value),
  close: () => true,
  open: () => true
};

export type DrawerEmits = typeof drawerEmits;
