import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const anchorProps: {
    readonly container: {
        readonly type: PropType<string | Window | HTMLElement>;
        readonly default: Window & typeof globalThis;
    };
    readonly direction: {
        readonly type: PropType<"vertical" | "horizontal">;
        readonly default: "vertical";
    };
    readonly lineWeight: NumberConstructor;
    readonly showLine: BooleanConstructor;
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly size: PropType<ComicSize>;
    readonly color: StringConstructor;
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
};
export type AnchorProps = ExtractPropTypes<typeof anchorProps>;
export declare const anchorEmits: {
    change: (href: string) => boolean;
};
export type AnchorEmits = typeof anchorEmits;
