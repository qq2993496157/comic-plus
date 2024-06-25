
declare const _default: import('vue').DefineComponent<{
    readonly wrap: BooleanConstructor;
    readonly size: {
        readonly type: import("vue").PropType<number | "large" | "default" | "small">;
        readonly default: "default";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly split: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    readonly align: {
        readonly type: import("vue").PropType<"center" | "flex-end" | "flex-start">;
        readonly default: "center";
    };
    readonly fill: BooleanConstructor;
    readonly fillRatio: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly wrap: BooleanConstructor;
    readonly size: {
        readonly type: import("vue").PropType<number | "large" | "default" | "small">;
        readonly default: "default";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly split: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    readonly align: {
        readonly type: import("vue").PropType<"center" | "flex-end" | "flex-start">;
        readonly default: "center";
    };
    readonly fill: BooleanConstructor;
    readonly fillRatio: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
}>>, {
    readonly size: number | "large" | "default" | "small";
    readonly fill: boolean;
    readonly direction: import("../../../utils").ComicDir;
    readonly wrap: boolean;
    readonly align: "center" | "flex-end" | "flex-start";
    readonly fillRatio: number;
}, {}>;
export default _default;
