import { ExtractPropTypes, PropType } from 'vue';

export declare const cardGroupProps: {
    readonly cardHoverEffect: {
        readonly type: PropType<"none" | "filter" | "stack">;
        readonly default: "filter";
    };
};
export type CardGroupProps = ExtractPropTypes<typeof cardGroupProps>;
