
export declare const Menu: import('vue').DefineComponent<{
    readonly modelValue: StringConstructor;
    readonly mode: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "vertical";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly backgroundColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly activeBackgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly collapse: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: StringConstructor;
    readonly mode: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "vertical";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly backgroundColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly activeBackgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly collapse: BooleanConstructor;
}>>, {
    readonly size: number;
    readonly mode: import("../../../utils").ComicDir;
    readonly collapse: boolean;
}, {}>;
