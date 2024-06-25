
declare const _default: import('vue').DefineComponent<{
    readonly destroy: FunctionConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    readonly type: import("vue").PropType<import("../../../../utils").ComicType2>;
    readonly content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    readonly closeButtonText: {
        readonly type: StringConstructor;
        readonly default: "关闭";
    };
    readonly icon: StringConstructor;
    readonly color: StringConstructor;
    readonly center: BooleanConstructor;
    readonly modeClose: BooleanConstructor;
    readonly escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly isVNode: BooleanConstructor;
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly destroy: FunctionConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    readonly type: import("vue").PropType<import("../../../../utils").ComicType2>;
    readonly content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    readonly closeButtonText: {
        readonly type: StringConstructor;
        readonly default: "关闭";
    };
    readonly icon: StringConstructor;
    readonly color: StringConstructor;
    readonly center: BooleanConstructor;
    readonly modeClose: BooleanConstructor;
    readonly escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly isVNode: BooleanConstructor;
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
}>>, {
    readonly title: string;
    readonly center: boolean;
    readonly lockScroll: boolean;
    readonly closeButtonText: string;
    readonly modeClose: boolean;
    readonly escClose: boolean;
    readonly showButton: boolean;
    readonly showClose: boolean;
    readonly showIcon: boolean;
    readonly isVNode: boolean;
}, {}>;
export default _default;
