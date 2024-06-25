
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly target: StringConstructor;
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly size: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly right: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly target: StringConstructor;
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly size: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly right: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
}>>, {
    readonly right: string | number;
    readonly size: string | number;
    readonly bottom: string | number;
    readonly visibleHeight: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
