import type { Component, ExtractPropTypes, PropType } from 'vue';

export const menuItemProps = {
  index: String,
  label: String,
  icon: Object as PropType<Component>,
  showEllipsis: Boolean
} as const;

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
