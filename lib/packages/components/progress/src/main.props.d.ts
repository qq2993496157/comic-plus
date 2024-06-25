import { ComicType } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const STATUS: {
    success: string;
    warning: string;
    fail: string;
};
type Colos = string | Record<string, string> | ((value: number) => string);
export declare const progressProps: {
    readonly progress: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly type: {
        readonly type: PropType<ComicType>;
        readonly default: "primary";
    };
    readonly barType: {
        readonly type: PropType<"circle" | "line" | "line-trends" | "trends">;
        readonly default: "line";
    };
    readonly status: PropType<"success" | "warning" | "fail">;
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: "120";
    };
    readonly barWidth: NumberConstructor;
    readonly colors: PropType<Colos>;
    readonly insetFormat: BooleanConstructor;
    readonly format: StringConstructor;
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
export {};
