import { PropType, ExtractPropTypes } from 'vue';

export declare const previewImageProps: {
    readonly current: NumberConstructor;
    readonly list: {
        readonly type: PropType<string[]>;
        readonly required: true;
    };
    readonly destroy: FunctionConstructor;
};
export type PreviewImageProps = ExtractPropTypes<typeof previewImageProps>;
