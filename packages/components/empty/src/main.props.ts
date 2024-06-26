import type { ExtractPropTypes } from 'vue';

export const emptyProps = {
  description: String,
  image: String,
  imageSize: Number
} as const;

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
