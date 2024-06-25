
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly mode: import("vue").PropType<"plain" | "light">;
    readonly border: BooleanConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 22;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly mode: import("vue").PropType<"plain" | "light">;
    readonly border: BooleanConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 22;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
}>> & {
    onClose?: () => any;
}, {
    readonly size: number;
    readonly transition: boolean;
    readonly border: boolean;
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
