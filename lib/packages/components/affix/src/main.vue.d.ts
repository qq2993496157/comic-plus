
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly position: {
        readonly type: import("vue").PropType<"top" | "bottom">;
        readonly default: "top";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly target: StringConstructor;
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly position: {
        readonly type: import("vue").PropType<"top" | "bottom">;
        readonly default: "top";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly target: StringConstructor;
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly disabled: BooleanConstructor;
}>> & {
    onChange?: (value: boolean) => any;
}, {
    readonly position: "top" | "bottom";
    readonly offset: number;
    readonly zIndex: number;
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
