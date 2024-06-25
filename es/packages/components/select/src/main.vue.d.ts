
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<import("../../../utils").Arrayable<string | number>>;
    readonly multiple: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("../../../utils").Arrayable<string | number>) => void;
    change: (value: import("../../../utils").Arrayable<string | number>) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<import("../../../utils").Arrayable<string | number>>;
    readonly multiple: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
}>> & {
    onChange?: (value: import("../../../utils").Arrayable<string | number>) => any;
    "onUpdate:modelValue"?: (value: import("../../../utils").Arrayable<string | number>) => any;
    onClear?: () => any;
}, {
    readonly disabled: boolean;
    readonly clearable: boolean;
    readonly multiple: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
