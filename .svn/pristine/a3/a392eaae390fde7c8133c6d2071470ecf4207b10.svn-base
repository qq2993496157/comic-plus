import type { ExtractPropTypes } from 'vue';

export const waterfallProps = {
  col: {
    type: Number,
    default: 4
  },
  gutter: {
    type: Number,
    default: 10
  },
  itemWidth: Number
} as const;
export type WaterfallProps = ExtractPropTypes<typeof waterfallProps>;

export const waterfallEmits = {
  update: () => true
};

export type WaterfallEmits = typeof waterfallEmits;
