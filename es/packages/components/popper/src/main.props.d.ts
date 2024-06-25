import { ExtractPropTypes } from 'vue';

export declare const popperProps: {
    readonly show: BooleanConstructor;
    readonly hideArrow: BooleanConstructor;
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type PopperProps = ExtractPropTypes<typeof popperProps>;
