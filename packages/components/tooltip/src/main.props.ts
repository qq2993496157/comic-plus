import type { ExtractDefaultPropTypes, PropType } from 'vue';
import { Placement } from '@floating-ui/vue';

export const tooltipProps = {
  content: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'top'
  },
  triggerRef: HTMLElement
} as const;

export type TooltipProps = ExtractDefaultPropTypes<typeof tooltipProps>;
