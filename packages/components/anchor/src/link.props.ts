import type { ExtractPropTypes } from 'vue';

export const anchorLinkProps = {
  href: {
    type: String,
    required: true
  },
  title: String,
  underline: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 500
  },
  anchorAnimation: Boolean
} as const;

export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>;
