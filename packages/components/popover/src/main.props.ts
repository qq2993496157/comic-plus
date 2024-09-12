import { ExtractPropTypes, PropType } from 'vue';
import { Placement } from '@floating-ui/vue';
export const popoverProps = {
  visible: {
    type: Boolean,
    default: null
  },
  trigger: {
    type: String as PropType<'click' | 'hover' | 'contextmenu'>,
    default: 'hover'
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  title: String,
  content: String,
  width: {
    type: Number,
    default: 150
  },
  offset: {
    type: Number,
    default: 10
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  popperClass: String
} as const;

export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
