
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: BooleanConstructor;
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly modeClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "right";
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly header: StringConstructor;
    readonly dimension: {
        readonly type: StringConstructor;
        readonly default: "30%";
    };
    readonly color: StringConstructor;
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    close: () => void;
    open: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: BooleanConstructor;
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly modeClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "right";
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly header: StringConstructor;
    readonly dimension: {
        readonly type: StringConstructor;
        readonly default: "30%";
    };
    readonly color: StringConstructor;
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
}>> & {
    onClose?: () => any;
    onOpen?: () => any;
    "onUpdate:modelValue"?: (value: boolean) => any;
}, {
    readonly direction: "left" | "right" | "top" | "bottom";
    readonly appendToBody: boolean;
    readonly lockScroll: boolean;
    readonly modeClose: boolean;
    readonly showClose: boolean;
    readonly modelValue: boolean;
    readonly dimension: string;
}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
