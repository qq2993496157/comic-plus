import { ExtractPropTypes, PropType } from 'vue';

export const timelineProps = {
  timePosition: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'bottom'
  },
  cross: Boolean
} as const;

export type TimelineProps = ExtractPropTypes<typeof timelineProps>;
