import { ComicType, ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const buttonProps: {
    readonly type: PropType<ComicType>;
    readonly size: PropType<ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly icon: StringConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: StringConstructor;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export type ButtonEmits = typeof buttonEmits;
export declare const buttonGroupProps: {
    round: BooleanConstructor;
    size: PropType<ComicSize>;
};
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
