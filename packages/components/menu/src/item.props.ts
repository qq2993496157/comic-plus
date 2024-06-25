import type { ExtractPropTypes } from 'vue';

export const menuItemProps = {
  index: String,
  label: String,
  icon: String,
  showEllipsis: Boolean
} as const;

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
