import { ComicSize } from '../../../utils';
import { ValueType, Shortcut } from './type';
import { PropType, ExtractPropTypes } from 'vue';

export declare const datePickerProps: {
    readonly modelValue: {
        readonly type: PropType<ValueType>;
        readonly required: true;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly valueFormat: {
        readonly type: PropType<"string" | "number" | "date">;
        readonly default: "date";
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly size: PropType<ComicSize>;
    readonly range: BooleanConstructor;
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-calendar";
    };
    readonly shortcuts: PropType<Shortcut[]>;
    readonly disabled: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabledDate: FunctionConstructor;
};
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
export declare const datePickerEmits: {
    "update:modelValue": (value: ValueType) => boolean;
    change: (value: ValueType) => boolean;
    clear: () => boolean;
};
export type DatePickerEmits = typeof datePickerEmits;
