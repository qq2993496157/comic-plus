import { ExtractPropTypes, PropType } from 'vue';

export declare const affixProps: {
    readonly position: {
        readonly type: PropType<"top" | "bottom">;
        readonly default: "top";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly target: StringConstructor;
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly disabled: BooleanConstructor;
};
export type AffixProps = ExtractPropTypes<typeof affixProps>;
export declare const affixEmits: {
    change: (value: boolean) => boolean;
};
export type AffixEmits = typeof affixEmits;
