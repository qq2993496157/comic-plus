import { ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const inputProps: {
    readonly modelValue: PropType<string | number>;
    readonly size: PropType<ComicSize>;
    readonly prefixIcon: StringConstructor;
    readonly suffixIcon: StringConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly type: StringConstructor;
    readonly disabled: BooleanConstructor;
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export declare const inputEmits: {
    "update:modelValue": (val: string | number) => boolean;
    change: (val: string | number) => boolean;
    input: (val: string | number) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    focus: (evt: FocusEvent) => boolean;
};
export type InputEmits = typeof inputEmits;
