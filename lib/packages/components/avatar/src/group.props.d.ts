import { ImageFit } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const avatarGroupProps: {
    readonly fit: {
        readonly type: PropType<ImageFit>;
        readonly default: "cover";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly shape: {
        readonly type: PropType<"circle" | "square">;
        readonly default: "circle";
    };
    readonly layout: {
        readonly type: PropType<"tile" | "stack">;
        readonly default: "stack";
    };
    readonly offset: NumberConstructor;
    readonly shadow: BooleanConstructor;
    readonly count: NumberConstructor;
    readonly clickShowAll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;
export declare const avatarGroupEmits: {
    'change-show': (show: boolean) => boolean;
};
export type AvatarGroupEmits = typeof avatarGroupEmits;
