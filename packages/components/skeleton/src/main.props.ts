import type { ExtractPropTypes } from 'vue';

export const skeletonProps = {
  rows: {
    type: Number,
    default: 4
  },
  animated: Boolean,
  loading: {
    type: Boolean,
    default: true
  },
  count: {
    type: Number,
    default: 1
  },
  throttle: {
    type: Number,
    default: 0
  }
} as const;

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
