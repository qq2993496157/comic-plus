import type { ExtractPropTypes } from 'vue';

export const popperProps = {
  show: Boolean,
  hideArrow: Boolean,
  center: {
    type: Boolean,
    default: true
  }
} as const;
export type PopperProps = ExtractPropTypes<typeof popperProps>;
