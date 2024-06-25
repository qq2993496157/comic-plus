import { ExtractPropTypes } from 'vue';

export declare const skeletonProps: {
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly animated: BooleanConstructor;
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
