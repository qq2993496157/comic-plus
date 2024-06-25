import { ExtractPropTypes } from 'vue';

export declare const submenuProps: {
    readonly label: StringConstructor;
    readonly icon: StringConstructor;
    readonly index: StringConstructor;
    readonly showEllipsis: BooleanConstructor;
};
export type SubmenuProps = ExtractPropTypes<typeof submenuProps>;
