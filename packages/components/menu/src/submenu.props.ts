import type { ExtractPropTypes } from 'vue';

export const submenuProps = {
  label: String,
  icon: String,
  index: String,
  showEllipsis: Boolean
} as const;

export type SubmenuProps = ExtractPropTypes<typeof submenuProps>;
