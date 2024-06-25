
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly prefixIcon: StringConstructor;
    readonly suffixIcon: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly type: StringConstructor;
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number) => void;
    input: (val: string | number) => void;
    blur: (evt: FocusEvent) => void;
    change: (val: string | number) => void;
    focus: (evt: FocusEvent) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly prefixIcon: StringConstructor;
    readonly suffixIcon: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly type: StringConstructor;
    readonly disabled: BooleanConstructor;
}>> & {
    onChange?: (val: string | number) => any;
    onFocus?: (evt: FocusEvent) => any;
    onBlur?: (evt: FocusEvent) => any;
    onInput?: (val: string | number) => any;
    "onUpdate:modelValue"?: (val: string | number) => any;
    onClear?: () => any;
}, {
    readonly disabled: boolean;
    readonly clearable: boolean;
}, {}>, {
    prefix?(_: {}): any;
    "prefix-icon"?(_: {}): any;
    "suffix-icon"?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
