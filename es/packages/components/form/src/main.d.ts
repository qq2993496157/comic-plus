
declare const _default: import('vue').DefineComponent<{
    readonly model: import("vue").PropType<Record<string, any>>;
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "80px";
    };
    readonly labelPosition: {
        readonly type: import("vue").PropType<"left" | "right" | "top">;
        readonly default: "right";
    };
    readonly rules: import("vue").PropType<{
        trigger?: import("../../../utils").Arrayable<string>;
    } & import("async-validator").RuleItem>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly hideRequiredAsterisk: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly model: import("vue").PropType<Record<string, any>>;
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "80px";
    };
    readonly labelPosition: {
        readonly type: import("vue").PropType<"left" | "right" | "top">;
        readonly default: "right";
    };
    readonly rules: import("vue").PropType<{
        trigger?: import("../../../utils").Arrayable<string>;
    } & import("async-validator").RuleItem>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly hideRequiredAsterisk: BooleanConstructor;
}>>, {
    readonly labelWidth: string;
    readonly labelPosition: "left" | "right" | "top";
    readonly hideRequiredAsterisk: boolean;
}, {}>;
export default _default;
