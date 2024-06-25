import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const inputNumberProps: {
    readonly modelValue: NumberConstructor;
    readonly size: PropType<ComicSize>;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly disabled: BooleanConstructor;
};
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
export declare const inputNumberEmits: {
    "update:modelValue": (value: number) => boolean;
    change: (value: number) => boolean;
    blur: (evt: FocusEvent) => boolean;
    focus: (evt: FocusEvent) => boolean;
};
export type InputNumberEmits = typeof inputNumberEmits;
