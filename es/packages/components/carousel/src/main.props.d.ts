import { ComicDisplay, ComicDir } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const carouselProps: {
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    readonly mode: {
        readonly type: PropType<"transform" | "opacity">;
        readonly default: "transform";
    };
    readonly autoPlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly arrow: {
        readonly type: PropType<ComicDisplay>;
        readonly default: "hover";
    };
    readonly direction: {
        readonly type: PropType<ComicDir>;
        readonly default: "horizontal";
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly defaultIndex: NumberConstructor;
    readonly pauseOnHover: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 3000;
        readonly validator: (value: number) => boolean;
    };
};
export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export declare const carouselEmits: {
    change: (value: number) => boolean;
};
export type CarouselEmits = typeof carouselEmits;
