
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly plain: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly icon: StringConstructor;
    readonly rolling: BooleanConstructor;
    readonly color: StringConstructor;
    readonly closable: BooleanConstructor;
    readonly hoverPause: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly plain: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly icon: StringConstructor;
    readonly rolling: BooleanConstructor;
    readonly color: StringConstructor;
    readonly closable: BooleanConstructor;
    readonly hoverPause: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    onClose?: () => any;
}, {
    readonly plain: boolean;
    readonly closable: boolean;
    readonly rolling: boolean;
    readonly hoverPause: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
