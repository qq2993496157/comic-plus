
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly type: {
        readonly type: import("vue").PropType<"circle" | "line" | "card">;
        readonly default: "line";
    };
    readonly color: StringConstructor;
    readonly onlyTab: BooleanConstructor;
    readonly closable: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    change: (value: string | number) => void;
    "tab-remove": (value: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<string | number>;
    readonly type: {
        readonly type: import("vue").PropType<"circle" | "line" | "card">;
        readonly default: "line";
    };
    readonly color: StringConstructor;
    readonly onlyTab: BooleanConstructor;
    readonly closable: BooleanConstructor;
}>> & {
    onChange?: (value: string | number) => any;
    "onUpdate:modelValue"?: (value: string | number) => any;
    "onTab-remove"?: (value: string | number) => any;
}, {
    readonly type: "circle" | "line" | "card";
    readonly onlyTab: boolean;
    readonly closable: boolean;
}, {}>, {
    extra?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
