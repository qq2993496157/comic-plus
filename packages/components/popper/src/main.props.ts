import { Placement } from '@floating-ui/vue';
import type { ExtractPropTypes, PropType, Ref } from 'vue';

export const popperProps = {
  show: Boolean,
  hideArrow: Boolean,
  offset: {
    type: Number,
    default: 10
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  arrowLeft: Boolean
} as const;
export type PopperProps = ExtractPropTypes<typeof popperProps>;
