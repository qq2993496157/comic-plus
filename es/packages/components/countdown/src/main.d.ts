
declare const _default: import('vue').DefineComponent<{
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 0;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "HH:mm:ss";
    };
    readonly prefix: StringConstructor;
    readonly suffix: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 0;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "HH:mm:ss";
    };
    readonly prefix: StringConstructor;
    readonly suffix: StringConstructor;
}>> & {
    onFinish?: () => any;
}, {
    readonly value: string | number;
    readonly format: string;
}, {}>;
export default _default;
