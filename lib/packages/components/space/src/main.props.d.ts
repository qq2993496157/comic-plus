import { ComicDir } from '../../../utils';
import { ExtractPropTypes, PropType, VNode } from 'vue';

export declare const spaceProps: {
    readonly wrap: BooleanConstructor;
    readonly size: {
        readonly type: PropType<number | "large" | "default" | "small">;
        readonly default: "default";
    };
    readonly direction: {
        readonly type: PropType<ComicDir>;
        readonly default: "horizontal";
    };
    readonly split: PropType<string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
    readonly align: {
        readonly type: PropType<"center" | "flex-end" | "flex-start">;
        readonly default: "center";
    };
    readonly fill: BooleanConstructor;
    readonly fillRatio: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
