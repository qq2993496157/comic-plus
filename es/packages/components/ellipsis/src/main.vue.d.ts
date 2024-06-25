
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly data: import("vue").PropType<any[]>;
    readonly text: StringConstructor;
    readonly type: {
        readonly type: import("vue").PropType<"data" | "text">;
        readonly default: "text";
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: "展开";
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: "收起";
    };
    readonly clamp: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: import("vue").PropType<any[]>;
    readonly text: StringConstructor;
    readonly type: {
        readonly type: import("vue").PropType<"data" | "text">;
        readonly default: "text";
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: "展开";
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: "收起";
    };
    readonly clamp: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
}>>, {
    readonly type: "data" | "text";
    readonly openText: string;
    readonly closeText: string;
    readonly clamp: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
