import { Component, ExtractPropTypes, PropType } from 'vue';

export const timelineItemProps = {
  time: String,
  reverse: Boolean,
  color: String,
  fill: Boolean,
  icon: Object as PropType<Component>,
  dashedLine: Boolean
} as const;

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
