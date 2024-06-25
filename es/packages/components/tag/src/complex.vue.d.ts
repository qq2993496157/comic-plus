
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly type: StringConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
    readonly title: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: StringConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
    readonly title: StringConstructor;
}>> & {
    onClose?: () => any;
}, {
    readonly size: number;
    readonly transition: boolean;
    readonly closable: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
