import { ExtractPropTypes } from 'vue';

export declare const listProps: {
    readonly animated: BooleanConstructor;
    readonly animation: StringConstructor;
    readonly border: BooleanConstructor;
    readonly header: StringConstructor;
    readonly footer: StringConstructor;
};
export type ListProps = ExtractPropTypes<typeof listProps>;
