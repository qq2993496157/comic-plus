import type { ExtractPropTypes, PropType } from 'vue';
import { isBoolean } from '../../../utils';

export const affixProps = {
  position: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top'
  },
  offset: {
    type: Number,
    default: 0
  },
  target: String,
  zIndex: {
    type: Number,
    default: 100
  },
  disabled: Boolean
} as const;

export type AffixProps = ExtractPropTypes<typeof affixProps>;

export const affixEmits = {
  change: (value: boolean) => isBoolean(value)
};

export type AffixEmits = typeof affixEmits;
