import { Placement } from '@floating-ui/vue';
import { effect, type ExtractPropTypes, type PropType, type Ref } from 'vue';

export const popperProps = {
  trigger: Object as PropType<Element>,
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
  arrowLeft: Boolean,
  transitionName: {
    type: String,
    default: 'popper'
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  customClass: String
} as const;
export type PopperProps = ExtractPropTypes<typeof popperProps>;
