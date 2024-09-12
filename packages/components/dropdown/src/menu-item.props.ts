import type { ExtractPropTypes, PropType, Component } from 'vue';

export const dropdownItemProps = {
  disabled: Boolean,
  divider: Boolean,
  sign: String,
  icon: Object as PropType<Component>
} as const;

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
