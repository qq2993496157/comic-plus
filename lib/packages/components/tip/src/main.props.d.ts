import { ComicType, ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const tipProps: {
    readonly type: PropType<ComicType>;
    readonly plain: BooleanConstructor;
    readonly size: PropType<ComicSize>;
    readonly icon: StringConstructor;
    readonly rolling: BooleanConstructor;
    readonly color: StringConstructor;
    readonly closable: BooleanConstructor;
    readonly hoverPause: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type TipProps = ExtractPropTypes<typeof tipProps>;
export declare const tipEmits: {
    close: () => boolean;
};
export type TipEmits = typeof tipEmits;
