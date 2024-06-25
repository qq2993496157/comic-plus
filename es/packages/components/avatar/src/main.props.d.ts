import { ImageFit } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const avatarProps: {
    readonly src: StringConstructor;
    readonly fit: PropType<ImageFit>;
    readonly size: NumberConstructor;
    readonly shape: PropType<"circle" | "square">;
    readonly color: StringConstructor;
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
