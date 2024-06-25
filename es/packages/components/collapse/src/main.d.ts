
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<string | string[]>;
    readonly accordion: BooleanConstructor;
    readonly fill: BooleanConstructor;
    readonly color: StringConstructor;
    readonly background: StringConstructor;
    readonly gap: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[]) => boolean;
    change: (value: string | string[]) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<string | string[]>;
    readonly accordion: BooleanConstructor;
    readonly fill: BooleanConstructor;
    readonly color: StringConstructor;
    readonly background: StringConstructor;
    readonly gap: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
}>> & {
    onChange?: (value: string | string[]) => any;
    "onUpdate:modelValue"?: (value: string | string[]) => any;
}, {
    readonly fill: boolean;
    readonly accordion: boolean;
    readonly gap: number;
}, {}>;
export default _default;
