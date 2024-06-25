import { PropType, ExtractPropTypes } from 'vue';

export declare const ellipsisProps: {
    readonly data: PropType<any[]>;
    readonly text: StringConstructor;
    readonly type: {
        readonly type: PropType<"data" | "text">;
        readonly default: "text";
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: "展开";
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: "收起";
    };
    readonly clamp: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
};
export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
