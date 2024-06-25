
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly value: import("vue").PropType<string | number>;
    readonly falseValue: import("vue").PropType<string | number>;
    readonly label: StringConstructor;
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: () => any;
    };
    readonly disabled: BooleanConstructor;
    readonly color: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (evt: string | number | boolean) => void;
    change: (evt: string | number | boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly value: import("vue").PropType<string | number>;
    readonly falseValue: import("vue").PropType<string | number>;
    readonly label: StringConstructor;
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: () => any;
    };
    readonly disabled: BooleanConstructor;
    readonly color: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}>> & {
    onChange?: (evt: string | number | boolean) => any;
    "onUpdate:modelValue"?: (evt: string | number | boolean) => any;
}, {
    readonly disabled: boolean;
    readonly modelValue: string | number | boolean;
    readonly indeterminate: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
