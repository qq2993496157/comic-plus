import { ExtractPropTypes } from 'vue';

export declare const anchorLinkProps: {
    readonly href: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly title: StringConstructor;
    readonly underline: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>;
