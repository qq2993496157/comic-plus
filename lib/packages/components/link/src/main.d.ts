
declare const _default: import('vue').DefineComponent<{
    readonly href: StringConstructor;
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly disabled: BooleanConstructor;
    readonly underline: BooleanConstructor;
    readonly target: {
        readonly type: import("vue").PropType<"_blank" | "_parent" | "_self" | "_top" | "framename">;
        readonly default: "_blank";
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent, href?: string) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly href: StringConstructor;
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly disabled: BooleanConstructor;
    readonly underline: BooleanConstructor;
    readonly target: {
        readonly type: import("vue").PropType<"_blank" | "_parent" | "_self" | "_top" | "framename">;
        readonly default: "_blank";
    };
}>> & {
    onClick?: (evt: MouseEvent, href?: string) => any;
}, {
    readonly target: "_blank" | "_parent" | "_self" | "_top" | "framename";
    readonly disabled: boolean;
    readonly underline: boolean;
}, {}>;
export default _default;
