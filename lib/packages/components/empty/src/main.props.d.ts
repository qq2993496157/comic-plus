import { ExtractPropTypes } from 'vue';

export declare const emptyProps: {
    readonly description: StringConstructor;
    readonly image: StringConstructor;
    readonly imageSize: NumberConstructor;
};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
