
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly href: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly title: StringConstructor;
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly href: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly title: StringConstructor;
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly offset: number;
    readonly underline: boolean;
}, {}>, {
    default?(_: {}): any;
    "sub-link"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
