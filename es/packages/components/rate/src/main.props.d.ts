import { ExtractPropTypes, PropType } from 'vue';

export declare const rateProps: {
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
        readonly validator: (value: number) => boolean;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
        readonly validator: (value: number) => boolean;
    };
    readonly allowHalf: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly texts: PropType<string[]>;
    readonly icons: {
        readonly type: PropType<string | string[]>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#f7ba2a";
    };
    readonly unColor: {
        readonly type: StringConstructor;
        readonly default: "#999999";
    };
    readonly variableIcon: FunctionConstructor;
    readonly variableColor: FunctionConstructor;
    readonly disabled: BooleanConstructor;
};
export type RateProps = ExtractPropTypes<typeof rateProps>;
export declare const rateEmits: {
    "update:modelValue": (value: number) => boolean;
    change: (value: number) => boolean;
};
export type RateEmits = typeof rateEmits;
