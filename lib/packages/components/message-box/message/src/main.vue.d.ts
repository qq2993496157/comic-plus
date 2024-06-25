
declare const _default: import('vue').DefineComponent<{
    id: StringConstructor;
    close: FunctionConstructor;
    destroy: FunctionConstructor;
    type: import("vue").PropType<import("../../../../utils").ComicType2>;
    content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    icon: StringConstructor;
    color: StringConstructor;
    showClose: BooleanConstructor;
    duration: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
}, {
    offset: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    close: FunctionConstructor;
    destroy: FunctionConstructor;
    type: import("vue").PropType<import("../../../../utils").ComicType2>;
    content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    icon: StringConstructor;
    color: StringConstructor;
    showClose: BooleanConstructor;
    duration: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
}>>, {
    duration: number;
    showClose: boolean;
    showIcon: boolean;
    isVNode: boolean;
}, {}>;
export default _default;
