import { ComicType } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const linkProps: {
    readonly href: StringConstructor;
    readonly type: PropType<ComicType>;
    readonly disabled: BooleanConstructor;
    readonly underline: BooleanConstructor;
    readonly target: {
        readonly type: PropType<"_blank" | "_parent" | "_self" | "_top" | "framename">;
        readonly default: "_blank";
    };
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
export declare const linkEmits: {
    click: (evt: MouseEvent, href?: string) => boolean;
};
export type LinkEmits = typeof linkEmits;
