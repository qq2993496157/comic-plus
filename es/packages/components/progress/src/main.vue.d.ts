
declare const _default: import('vue').DefineComponent<{
    readonly progress: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("../../../utils").ComicType>;
        readonly default: "primary";
    };
    readonly barType: {
        readonly type: import("vue").PropType<"circle" | "line" | "line-trends" | "trends">;
        readonly default: "line";
    };
    readonly status: import("vue").PropType<"success" | "warning" | "fail">;
    readonly size: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "120";
    };
    readonly barWidth: NumberConstructor;
    readonly colors: import("vue").PropType<string | Record<string, string> | ((value: number) => string)>;
    readonly insetFormat: BooleanConstructor;
    readonly format: StringConstructor;
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly progress: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("../../../utils").ComicType>;
        readonly default: "primary";
    };
    readonly barType: {
        readonly type: import("vue").PropType<"circle" | "line" | "line-trends" | "trends">;
        readonly default: "line";
    };
    readonly status: import("vue").PropType<"success" | "warning" | "fail">;
    readonly size: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "120";
    };
    readonly barWidth: NumberConstructor;
    readonly colors: import("vue").PropType<string | Record<string, string> | ((value: number) => string)>;
    readonly insetFormat: BooleanConstructor;
    readonly format: StringConstructor;
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly size: string | number;
    readonly progress: number;
    readonly type: import("../../../utils").ComicType;
    readonly barType: "circle" | "line" | "line-trends" | "trends";
    readonly insetFormat: boolean;
    readonly showText: boolean;
}, {}>;
export default _default;
