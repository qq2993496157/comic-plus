
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly label: StringConstructor;
    readonly value: import("vue").PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly activeColor: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number) => void;
    change: (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly label: StringConstructor;
    readonly value: import("vue").PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly activeColor: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}>> & {
    onChange?: (value: boolean) => any;
    "onUpdate:modelValue"?: (val: string | number) => any;
}, {
    readonly disabled: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
