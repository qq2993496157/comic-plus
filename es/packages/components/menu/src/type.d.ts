import { MenuProps } from './main.props';
import { ComputedRef, CSSProperties, InjectionKey } from 'vue';

export type MenuProvide = {
    props: MenuProps;
    style: ComputedRef<CSSProperties>;
    menuClick: (name: string) => void;
    offset?: number;
};
export type MenuItem = {
    idx: string;
    active: ComputedRef<boolean>;
};
export type SubmenuProvide = {
    closeMenu: (deep?: boolean) => void;
    setMenu: (item: MenuItem) => void;
    removeMenu: (idx: string) => void;
    offset?: number;
};
export declare const MENU_PROVIDE: InjectionKey<MenuProvide>;
