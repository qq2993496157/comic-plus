import type { ExtractPropTypes } from 'vue';

export const collapseItemProps = {
  label: String,
  name: String,
  color: String,
  background: String
} as const;

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
