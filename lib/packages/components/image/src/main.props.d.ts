import { ImageFit } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const imageProps: {
    readonly src: StringConstructor;
    readonly alt: StringConstructor;
    readonly fit: PropType<ImageFit>;
    readonly current: NumberConstructor;
    readonly loading: {
        readonly type: PropType<"eager" | "lazy">;
        readonly default: "eager";
    };
    readonly previewList: PropType<string[]>;
};
export type ImageProps = ExtractPropTypes<typeof imageProps>;
export declare const imageEmits: {
    load: () => boolean;
    error: () => boolean;
};
export type ImageEmits = typeof imageEmits;
