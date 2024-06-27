import type { ExtractPropTypes } from 'vue';

export const bulletProps = {
  sign: String,
  icon: String,
  color: String,
  disabled: Boolean
} as const;

export type BulletProps = ExtractPropTypes<typeof bulletProps>;
