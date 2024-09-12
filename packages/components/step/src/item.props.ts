import type { Component, ExtractPropTypes, PropType } from 'vue';

export const stepItemProps = {
  title: String,
  content: String,
  icon: Object as PropType<Component>,
  error: Boolean
} as const;

export type StepItemProps = ExtractPropTypes<typeof stepItemProps>;
