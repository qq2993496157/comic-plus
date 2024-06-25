import { ComicDisplay } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const cardProps: {
    readonly shadow: {
        readonly type: PropType<ComicDisplay>;
        readonly default: "always";
    };
    readonly turnCard: BooleanConstructor;
    readonly turnType: {
        readonly type: PropType<"hover" | "click">;
        readonly default: "hover";
    };
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
