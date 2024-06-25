import { ExtractPropTypes } from 'vue';

export declare const tagComplexProps: {
    readonly type: StringConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
    readonly title: StringConstructor;
};
export type TagComplexProps = ExtractPropTypes<typeof tagComplexProps>;
export declare const tagComplexEmits: {
    close: () => boolean;
};
export type TagComplexEmits = typeof tagComplexEmits;
