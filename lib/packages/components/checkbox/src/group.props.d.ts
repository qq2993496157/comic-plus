import { ArrayMix, ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const checkboxGroupProps: {
    readonly modelValue: PropType<ArrayMix<string | number>>;
    readonly size: PropType<ComicSize>;
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare const checkboxGroupEmits: {
    "update:modelValue": (val: ArrayMix<string | number>) => boolean;
    change: (val: ArrayMix<string | number>) => boolean;
};
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
