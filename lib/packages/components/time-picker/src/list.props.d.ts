import { ExtractPropTypes } from 'vue';

export declare const listProps: {
    readonly time: StringConstructor;
};
export type ListProps = ExtractPropTypes<typeof listProps>;
export declare const listEmits: {
    change: (value: string) => boolean;
};
export type ListEmits = typeof listEmits;
