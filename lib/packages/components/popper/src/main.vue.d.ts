
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly show: BooleanConstructor;
    readonly hideArrow: BooleanConstructor;
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    popperInner: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly show: BooleanConstructor;
    readonly hideArrow: BooleanConstructor;
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly center: boolean;
    readonly show: boolean;
    readonly hideArrow: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
