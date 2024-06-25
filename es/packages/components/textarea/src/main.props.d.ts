import { ExtractPropTypes } from 'vue';

export declare const textareaProps: {
    readonly modelValue: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly maxlength: NumberConstructor;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: BooleanConstructor;
    readonly autoHeight: BooleanConstructor;
};
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export declare const textareaEmits: {
    "update:modelValue": (value: string) => boolean;
    change: (value: string) => boolean;
    blur: (evt: FocusEvent) => boolean;
    focus: (evt: FocusEvent) => boolean;
};
export type TextareaEmits = typeof textareaEmits;
