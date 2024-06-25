
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly shadow: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "always";
    };
    readonly turnCard: BooleanConstructor;
    readonly turnType: {
        readonly type: import("vue").PropType<"hover" | "click">;
        readonly default: "hover";
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly shadow: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "always";
    };
    readonly turnCard: BooleanConstructor;
    readonly turnType: {
        readonly type: import("vue").PropType<"hover" | "click">;
        readonly default: "hover";
    };
}>>, {
    readonly shadow: import("../../../utils").ComicDisplay;
    readonly turnCard: boolean;
    readonly turnType: "hover" | "click";
}, {}>, {
    default?(_: {}): any;
    opposite?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
