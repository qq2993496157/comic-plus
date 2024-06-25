import { ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const colorPickerProps: {
    readonly modelValue: StringConstructor;
    readonly alpha: BooleanConstructor;
    readonly format: StringConstructor;
    readonly size: PropType<ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly predefine: PropType<string[]>;
};
export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
export declare const colorPickerEmits: {
    "update:modelValue": (value: string) => boolean;
    change: (value: string) => boolean;
};
export type ColorPickerEmits = typeof colorPickerEmits;
