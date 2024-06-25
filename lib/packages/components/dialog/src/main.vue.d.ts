
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
    readonly transitionClass: {
        readonly type: StringConstructor;
        readonly default: "cross-scale";
    };
    readonly header: StringConstructor;
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "70%";
    };
    readonly top: {
        readonly type: StringConstructor;
        readonly default: "15vh";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#ffffff";
    };
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly appendToBody: BooleanConstructor;
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
    readonly transitionClass: {
        readonly type: StringConstructor;
        readonly default: "cross-scale";
    };
    readonly header: StringConstructor;
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "70%";
    };
    readonly top: {
        readonly type: StringConstructor;
        readonly default: "15vh";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#ffffff";
    };
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly appendToBody: BooleanConstructor;
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
}>> & {
    onClose?: () => any;
    onOpen?: () => any;
    "onUpdate:modelValue"?: (value: boolean) => any;
}, {
    readonly top: string;
    readonly width: string;
    readonly color: string;
    readonly appendToBody: boolean;
    readonly lockScroll: boolean;
    readonly modeClose: boolean;
    readonly showClose: boolean;
    readonly modelValue: boolean;
    readonly transitionClass: string;
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
