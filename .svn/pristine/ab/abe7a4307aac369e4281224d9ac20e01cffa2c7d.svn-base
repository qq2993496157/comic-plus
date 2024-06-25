import type { ExtractPropTypes, PropType } from 'vue';
import { ComicDisplay, isString } from '../../../utils';

export const elevatorProps = {
  height: {
    type: String,
    default: '100%'
  },
  offset: {
    type: Number,
    default: 0
  },
  postion: {
    type: String as PropType<'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'none'>,
    default: 'right-bottom'
  },
  hasMenu: {
    type: Boolean,
    default: true
  },
  menuSize: {
    type: String,
    default: '40px'
  },
  fold: {
    type: Boolean,
    default: true
  },
  scrollbarDisplay: {
    type: String as PropType<ComicDisplay>,
    default: 'always'
  }
} as const;

export type ElevatorProps = ExtractPropTypes<typeof elevatorProps>;

export const elevatorEmits = {
  change: (value: string) => isString(value)
};

export type ElevatorEmits = typeof elevatorEmits;
