
declare const _default: import('vue').DefineComponent<{
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly currentPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly pageSizes: import("vue").PropType<number[]>;
    readonly pagerCount: {
        readonly type: import("vue").PropType<5 | 7 | 9 | 11 | 15 | 13 | 17 | 19 | 21>;
        readonly default: 7;
    };
    readonly layout: {
        readonly type: import("vue").PropType<"total" | "sizes" | "pages" | "jumper"[]>;
        readonly default: readonly ["pages"];
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly background: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:currentPage": (value: number) => void;
    "update:pageSize": (value: number) => void;
    "current-change": (value: number) => void;
    "size-change": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly currentPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly pageSizes: import("vue").PropType<number[]>;
    readonly pagerCount: {
        readonly type: import("vue").PropType<5 | 7 | 9 | 11 | 15 | 13 | 17 | 19 | 21>;
        readonly default: 7;
    };
    readonly layout: {
        readonly type: import("vue").PropType<"total" | "sizes" | "pages" | "jumper"[]>;
        readonly default: readonly ["pages"];
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly background: BooleanConstructor;
}>> & {
    "onUpdate:currentPage"?: (value: number) => any;
    "onUpdate:pageSize"?: (value: number) => any;
    "onCurrent-change"?: (value: number) => any;
    "onSize-change"?: (value: number) => any;
}, {
    readonly layout: "total" | "sizes" | "pages" | "jumper"[];
    readonly background: boolean;
    readonly total: number;
    readonly pageSize: number;
    readonly currentPage: number;
    readonly pagerCount: 5 | 7 | 9 | 11 | 15 | 13 | 17 | 19 | 21;
}, {}>;
export default _default;
