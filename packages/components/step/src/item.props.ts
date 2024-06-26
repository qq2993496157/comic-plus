import type { ExtractPropTypes } from 'vue';

export const stepItemProps = {
  title: String,
  content: String,
  icon: String,
  error: Boolean
} as const;

export type StepItemProps = ExtractPropTypes<typeof stepItemProps>;
