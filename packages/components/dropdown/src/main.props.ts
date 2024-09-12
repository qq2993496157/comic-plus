import type { ExtractPropTypes, PropType, Component } from 'vue';
import type { ComicType, ComicSize } from '../../../utils';

export const dropdownProps = {
  trigger: {
    type: String as PropType<'hover' | 'click' | 'right-click'>,
    default: 'hover'
  },
  chooseAfterHide: {
    type: Boolean,
    default: true
  },
  button: Boolean,
  size: String as PropType<ComicSize>,
  buttonType: String as PropType<ComicType>,
  buttonIcon: [Object, String] as PropType<Component | string>,
  disabled: Boolean,
  popperClass: String
} as const;

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;

export const dropdownEmits = {
  ['menu-click']: (value?: string) => ['string', 'undefined'].includes(typeof value),
  ['button-click']: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type DropdownEmits = typeof dropdownEmits;
