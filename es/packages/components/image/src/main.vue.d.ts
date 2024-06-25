
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly src: StringConstructor;
    readonly alt: StringConstructor;
    readonly fit: import("vue").PropType<import("../../../utils").ImageFit>;
    readonly current: NumberConstructor;
    readonly loading: {
        readonly type: import("vue").PropType<"eager" | "lazy">;
        readonly default: "eager";
    };
    readonly previewList: import("vue").PropType<string[]>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: () => void;
    load: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly src: StringConstructor;
    readonly alt: StringConstructor;
    readonly fit: import("vue").PropType<import("../../../utils").ImageFit>;
    readonly current: NumberConstructor;
    readonly loading: {
        readonly type: import("vue").PropType<"eager" | "lazy">;
        readonly default: "eager";
    };
    readonly previewList: import("vue").PropType<string[]>;
}>> & {
    onLoad?: () => any;
    onError?: () => any;
}, {
    readonly loading: "eager" | "lazy";
}, {}>, {
    load?(_: {}): any;
    error?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
