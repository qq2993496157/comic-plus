import type { ExtractPropTypes, PropType, Component } from 'vue';

export const bulletProps = {
  sign: String,
  icon: Object as PropType<Component>,
  color: String,
  disabled: Boolean
} as const;

export type BulletProps = ExtractPropTypes<typeof bulletProps>;
