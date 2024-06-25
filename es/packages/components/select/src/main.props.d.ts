import { ComicSize, Arrayable } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const selectProps: {
    readonly modelValue: PropType<Arrayable<string | number>>;
    readonly multiple: BooleanConstructor;
    readonly size: PropType<ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly placeholder: StringConstructor;
};
export type SelectProps = ExtractPropTypes<typeof selectProps>;
export declare const selectEmits: {
    "update:modelValue": (value: Arrayable<string | number>) => boolean;
    change: (value: Arrayable<string | number>) => boolean;
    clear: () => boolean;
};
export type SelectEmits = typeof selectEmits;
