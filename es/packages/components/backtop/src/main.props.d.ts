import { ExtractPropTypes, PropType } from 'vue';

export declare const backtopProps: {
    readonly target: StringConstructor;
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: 40;
    };
    readonly right: {
        readonly type: PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: PropType<string | number>;
        readonly default: 40;
    };
};
export type BacktopProps = ExtractPropTypes<typeof backtopProps>;
