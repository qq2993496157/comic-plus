
declare function menuClick(name: string): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "100%";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly postion: {
        readonly type: import("vue").PropType<"none" | "left-top" | "left-bottom" | "right-top" | "right-bottom">;
        readonly default: "right-bottom";
    };
    readonly hasMenu: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly menuSize: {
        readonly type: StringConstructor;
        readonly default: "40px";
    };
    readonly fold: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly scrollbarDisplay: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "always";
    };
}, {
    changeItemActive: typeof menuClick;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "100%";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly postion: {
        readonly type: import("vue").PropType<"none" | "left-top" | "left-bottom" | "right-top" | "right-bottom">;
        readonly default: "right-bottom";
    };
    readonly hasMenu: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly menuSize: {
        readonly type: StringConstructor;
        readonly default: "40px";
    };
    readonly fold: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly scrollbarDisplay: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "always";
    };
}>> & {
    onChange?: (value: string) => any;
}, {
    readonly offset: number;
    readonly height: string;
    readonly postion: "none" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
    readonly hasMenu: boolean;
    readonly menuSize: string;
    readonly fold: boolean;
    readonly scrollbarDisplay: import("../../../utils").ComicDisplay;
}, {}>, {
    menu?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
