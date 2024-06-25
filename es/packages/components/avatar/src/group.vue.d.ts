
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly fit: {
        readonly type: import("vue").PropType<import("../../../utils").ImageFit>;
        readonly default: "cover";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly shape: {
        readonly type: import("vue").PropType<"circle" | "square">;
        readonly default: "circle";
    };
    readonly layout: {
        readonly type: import("vue").PropType<"tile" | "stack">;
        readonly default: "stack";
    };
    readonly offset: NumberConstructor;
    readonly shadow: BooleanConstructor;
    readonly count: NumberConstructor;
    readonly clickShowAll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "change-show": (show: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly fit: {
        readonly type: import("vue").PropType<import("../../../utils").ImageFit>;
        readonly default: "cover";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly shape: {
        readonly type: import("vue").PropType<"circle" | "square">;
        readonly default: "circle";
    };
    readonly layout: {
        readonly type: import("vue").PropType<"tile" | "stack">;
        readonly default: "stack";
    };
    readonly offset: NumberConstructor;
    readonly shadow: BooleanConstructor;
    readonly count: NumberConstructor;
    readonly clickShowAll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    "onChange-show"?: (show: boolean) => any;
}, {
    readonly size: number;
    readonly fit: import("../../../utils").ImageFit;
    readonly shape: "circle" | "square";
    readonly layout: "tile" | "stack";
    readonly shadow: boolean;
    readonly clickShowAll: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
