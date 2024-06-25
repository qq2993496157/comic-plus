import { ExtractPropTypes } from 'vue';

export declare const menuItemProps: {
    readonly index: StringConstructor;
    readonly label: StringConstructor;
    readonly icon: StringConstructor;
    readonly showEllipsis: BooleanConstructor;
};
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
