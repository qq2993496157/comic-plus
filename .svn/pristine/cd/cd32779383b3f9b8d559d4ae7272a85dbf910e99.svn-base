import type { ExtractPropTypes, PropType } from 'vue';

export const backtopProps = {
  target: String,
  visibleHeight: {
    type: Number,
    default: 200
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 40
  },
  right: {
    type: [String, Number] as PropType<string | number>,
    default: 40
  },
  bottom: {
    type: [String, Number] as PropType<string | number>,
    default: 40
  }
} as const;

export type BacktopProps = ExtractPropTypes<typeof backtopProps>;
