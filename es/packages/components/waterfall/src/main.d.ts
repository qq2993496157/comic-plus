
declare const _default: import('vue').DefineComponent<{
    readonly col: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly itemWidth: NumberConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    update: () => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly col: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly gutter: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly itemWidth: NumberConstructor;
}>> & {
    onUpdate?: () => any;
}, {
    readonly col: number;
    readonly gutter: number;
}, {}>;
export default _default;
