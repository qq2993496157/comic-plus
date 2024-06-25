import { ExtractPropTypes } from 'vue';

export declare const dropdownItemProps: {
    readonly disabled: BooleanConstructor;
    readonly divider: BooleanConstructor;
    readonly sign: StringConstructor;
    readonly icon: StringConstructor;
};
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
