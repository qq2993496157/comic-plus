import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

type PagerCount = 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21;
export declare const paginationProps: {
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
    readonly pageSizes: PropType<number[]>;
    readonly pagerCount: {
        readonly type: PropType<PagerCount>;
        readonly default: 7;
    };
    readonly layout: {
        readonly type: PropType<"total" | "sizes" | "pages" | "jumper"[]>;
        readonly default: readonly ["pages"];
    };
    readonly size: PropType<ComicSize>;
    readonly background: BooleanConstructor;
};
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
export declare const paginationEmits: {
    "update:currentPage": (value: number) => boolean;
    "update:pageSize": (value: number) => boolean;
    "current-change": (value: number) => boolean;
    "size-change": (value: number) => boolean;
};
export type PaginationEmits = typeof paginationEmits;
export {};
