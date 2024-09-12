import { Component, ExtractPropTypes, PropType } from 'vue';

type ContextMenus =
  | {
      label?: string;
      value: any;
      icon?: Component;
      callback?: () => void;
    }[]
  | string[];

export const contextmenuProps = {
  menus: Array as PropType<ContextMenus>
} as const;

export type ContextmenuProps = ExtractPropTypes<typeof contextmenuProps>;

export const contextmenuEmits = {
  'menu-click': (value: any) => true
};

export type ContextmenuEmits = typeof contextmenuEmits;
