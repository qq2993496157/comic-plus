
declare const _default: import('vue').DefineComponent<{
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly contentPosition: {
        readonly type: import("vue").PropType<"left" | "right" | "center">;
        readonly default: "center";
    };
    readonly lineStyle: import("vue").PropType<string>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly contentPosition: {
        readonly type: import("vue").PropType<"left" | "right" | "center">;
        readonly default: "center";
    };
    readonly lineStyle: import("vue").PropType<string>;
}>>, {
    readonly direction: import("../../../utils").ComicDir;
    readonly lineWeight: number;
    readonly contentPosition: "left" | "right" | "center";
}, {}>;
export default _default;
