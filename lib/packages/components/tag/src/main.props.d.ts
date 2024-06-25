import { ComicType } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const tagProps: {
    readonly type: PropType<ComicType>;
    readonly mode: PropType<"plain" | "light">;
    readonly border: BooleanConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 22;
    };
    readonly closable: BooleanConstructor;
    readonly transition: BooleanConstructor;
    readonly color: StringConstructor;
};
export type TagProps = ExtractPropTypes<typeof tagProps>;
export declare const tagEmits: {
    close: () => boolean;
};
export type TagEmits = typeof tagEmits;
