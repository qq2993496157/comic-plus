
declare const _default: import('vue').DefineComponent<{
    destroy: FunctionConstructor;
    title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    type: import("vue").PropType<import("../../../../utils").ComicType2>;
    content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    center: BooleanConstructor;
    cancelButtonText: {
        readonly type: StringConstructor;
        readonly default: "取消";
    };
    confirmButtonText: {
        readonly type: StringConstructor;
        readonly default: "确认";
    };
    icon: StringConstructor;
    color: StringConstructor;
    modeClose: BooleanConstructor;
    escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    distinguishCloseAndCancel: BooleanConstructor;
    showConfirmButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showCancelButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
    customClass: StringConstructor;
    modeClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    destroy: FunctionConstructor;
    title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    type: import("vue").PropType<import("../../../../utils").ComicType2>;
    content: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    center: BooleanConstructor;
    cancelButtonText: {
        readonly type: StringConstructor;
        readonly default: "取消";
    };
    confirmButtonText: {
        readonly type: StringConstructor;
        readonly default: "确认";
    };
    icon: StringConstructor;
    color: StringConstructor;
    modeClose: BooleanConstructor;
    escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    distinguishCloseAndCancel: BooleanConstructor;
    showConfirmButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showCancelButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
    customClass: StringConstructor;
    modeClass: StringConstructor;
}>>, {
    title: string;
    center: boolean;
    lockScroll: boolean;
    modeClose: boolean;
    escClose: boolean;
    showClose: boolean;
    showIcon: boolean;
    isVNode: boolean;
    cancelButtonText: string;
    confirmButtonText: string;
    distinguishCloseAndCancel: boolean;
    showConfirmButton: boolean;
    showCancelButton: boolean;
}, {}>;
export default _default;
