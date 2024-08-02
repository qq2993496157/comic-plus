import { ExtractPropTypes } from 'vue';

export const timelineItemProps = {
  time: String,
  reverse: Boolean,
  color: String,
  fill: Boolean,
  icon: String,
  dashedLine: Boolean
} as const;

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
