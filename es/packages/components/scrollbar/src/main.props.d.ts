import { ComicDisplay } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const scrollbarProps: {
    readonly height: StringConstructor;
    readonly display: {
        readonly type: PropType<ComicDisplay>;
        readonly default: "hover";
    };
    readonly maxHeight: StringConstructor;
};
export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export declare const scrollbarEmits: {
    scroll: (evt: Event) => boolean;
};
export type ScrollbarEmits = typeof scrollbarEmits;
