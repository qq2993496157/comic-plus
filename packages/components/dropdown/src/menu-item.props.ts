import type { ExtractPropTypes } from 'vue';

export const dropdownItemProps = {
  disabled: Boolean,
  divider: Boolean,
  sign: String,
  icon: String
} as const;

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
