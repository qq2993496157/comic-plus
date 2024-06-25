import { ValueType } from './type';

declare const _default: import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<ValueType>;
        readonly required: true;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly valueFormat: {
        readonly type: import("vue").PropType<"string" | "number" | "date">;
        readonly default: "date";
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly range: BooleanConstructor;
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-calendar";
    };
    readonly shortcuts: import("vue").PropType<import("./type").Shortcut[]>;
    readonly disabled: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabledDate: FunctionConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ValueType) => void;
    change: (value: ValueType) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<ValueType>;
        readonly required: true;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly valueFormat: {
        readonly type: import("vue").PropType<"string" | "number" | "date">;
        readonly default: "date";
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly range: BooleanConstructor;
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-calendar";
    };
    readonly shortcuts: import("vue").PropType<import("./type").Shortcut[]>;
    readonly disabled: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabledDate: FunctionConstructor;
}>> & {
    onChange?: (value: ValueType) => any;
    "onUpdate:modelValue"?: (value: ValueType) => any;
    onClear?: () => any;
}, {
    readonly disabled: boolean;
    readonly icon: string;
    readonly clearable: boolean;
    readonly range: boolean;
    readonly format: string;
    readonly valueFormat: "string" | "number" | "date";
    readonly rangeSeparator: string;
}, {}>;
export default _default;
