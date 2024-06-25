import { PropType, ExtractPropTypes } from 'vue';

export declare const optionProps: {
    readonly label: PropType<string | number>;
    readonly value: PropType<string | number>;
    readonly disabled: BooleanConstructor;
};
export type OptionProps = ExtractPropTypes<typeof optionProps>;
