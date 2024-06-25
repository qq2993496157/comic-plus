
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly maxlength: NumberConstructor;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: BooleanConstructor;
    readonly autoHeight: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: string) => void;
    focus: (evt: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly maxlength: NumberConstructor;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: BooleanConstructor;
    readonly autoHeight: BooleanConstructor;
}>> & {
    onChange?: (value: string) => any;
    onFocus?: (evt: FocusEvent) => any;
    onBlur?: (evt: FocusEvent) => any;
    "onUpdate:modelValue"?: (value: string) => any;
}, {
    readonly disabled: boolean;
    readonly autoFocus: boolean;
    readonly autoHeight: boolean;
}, {}>;
export default _default;
