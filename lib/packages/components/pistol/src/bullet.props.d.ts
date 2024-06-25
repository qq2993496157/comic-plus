import { ExtractPropTypes } from 'vue';

export declare const bulletProps: {
    readonly sign: StringConstructor;
    readonly icon: StringConstructor;
    readonly color: StringConstructor;
};
export type BulletProps = ExtractPropTypes<typeof bulletProps>;
