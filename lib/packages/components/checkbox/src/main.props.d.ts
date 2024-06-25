import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const checkboxProps: {
    readonly modelValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly value: PropType<string | number>;
    readonly falseValue: PropType<string | number>;
    readonly label: StringConstructor;
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: () => any;
    };
    readonly disabled: BooleanConstructor;
    readonly color: StringConstructor;
    readonly size: PropType<ComicSize>;
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare const checkboxEmits: {
    "update:modelValue": (evt: boolean | string | number) => boolean;
    change: (evt: boolean | string | number) => boolean;
};
export type CheckboxEmits = typeof checkboxEmits;
