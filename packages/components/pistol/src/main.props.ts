import type { ExtractPropTypes, PropType, Component } from 'vue';
import type { ComicType } from '../../../utils';

export const pistolProps = {
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover'
  },
  type: String as PropType<ComicType>,
  color: String,
  size: {
    type: Number,
    default: 40
  },
  equal: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String as PropType<'wheel' | 'semi'>,
    default: 'wheel'
  },
  iteration: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String as PropType<'top' | 'left' | 'bottom' | 'right'>,
    default: 'top'
  },
  icon: Object as PropType<Component>,
  chooseAfterHide: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  dept: Number
} as const;

export type PistolProps = ExtractPropTypes<typeof pistolProps>;

export const pistolEmits = {
  shoot: (sign?: string) => ['string', 'undefined'].includes(typeof sign),
  ['trigger-click']: (evt: MouseEvent) => evt instanceof MouseEvent,
  open: () => true,
  close: () => true
};

export type PistolEmits = typeof pistolEmits;
