import { ComicType, ComicDir } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const POSITION_ENUM: {
    center: string;
    left: string;
    right: string;
};
export type BorderStyle = CSSStyleDeclaration['borderStyle'];
export declare const dividerProps: {
    readonly direction: {
        readonly type: PropType<ComicDir>;
        readonly default: "horizontal";
    };
    readonly type: PropType<ComicType>;
    readonly color: StringConstructor;
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly contentPosition: {
        readonly type: PropType<"left" | "right" | "center">;
        readonly default: "center";
    };
    readonly lineStyle: PropType<string>;
};
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
