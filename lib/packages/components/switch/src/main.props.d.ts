import { ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const switchProps: {
    readonly modelValue: PropType<string | number | boolean>;
    readonly onText: StringConstructor;
    readonly offText: StringConstructor;
    readonly onValue: PropType<string | number>;
    readonly offValue: PropType<string | number>;
    readonly onColor: StringConstructor;
    readonly offColor: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly square: BooleanConstructor;
    readonly inlineText: BooleanConstructor;
    readonly onIcon: StringConstructor;
    readonly offIcon: StringConstructor;
    readonly changeBefore: PropType<() => boolean | Promise<any>>;
    readonly loading: BooleanConstructor;
    readonly size: PropType<ComicSize>;
};
export type SwitchProps = ExtractPropTypes<typeof switchProps>;
export declare const switchEmits: {
    "update:modelValue": (val: boolean | string | number) => boolean;
    change: (val: boolean | string | number) => boolean;
};
export type SwitchEmits = typeof switchEmits;
