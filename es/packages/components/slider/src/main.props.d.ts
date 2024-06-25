import { ComicType, Arrayable } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const sliderProps: {
    readonly modelValue: {
        readonly type: PropType<number | number[]>;
        readonly required: true;
    };
    readonly type: PropType<ComicType>;
    readonly color: StringConstructor;
    readonly range: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (value: number) => boolean;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
        readonly validator: (value: number) => boolean;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly showStep: BooleanConstructor;
    readonly disabled: BooleanConstructor;
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
export declare const sliderEmits: {
    "update:modelValue": (value: Arrayable<number>) => boolean;
    change: (value: Arrayable<number>) => boolean;
    input: (value: Arrayable<number>) => boolean;
};
export type SliderEmits = typeof sliderEmits;
