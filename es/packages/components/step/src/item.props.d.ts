import { ExtractPropTypes } from 'vue';

export declare const stepItemProps: {
    readonly title: StringConstructor;
    readonly content: StringConstructor;
    readonly icon: StringConstructor;
    readonly error: BooleanConstructor;
};
export type StepItemProps = ExtractPropTypes<typeof stepItemProps>;
