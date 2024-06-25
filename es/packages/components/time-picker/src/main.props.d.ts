import { ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const timePickerProps: {
    readonly modelValue: {
        readonly type: PropType<string | string[]>;
        readonly required: true;
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-time";
    };
    readonly size: PropType<ComicSize>;
    readonly range: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
};
export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
export declare const timePickerEmits: {
    "update:modelValue": (value: string | string[]) => boolean;
    change: (value: string | string[]) => boolean;
    clear: () => boolean;
};
export type TimePickerEmits = typeof timePickerEmits;
