import { PropType, ExtractPropTypes } from 'vue';

export declare const collapseProps: {
    readonly modelValue: PropType<string | string[]>;
    readonly accordion: BooleanConstructor;
    readonly fill: BooleanConstructor;
    readonly color: StringConstructor;
    readonly background: StringConstructor;
    readonly gap: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
};
export type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare const collapseEmits: {
    "update:modelValue": (value: string | string[]) => boolean;
    change: (value: string | string[]) => boolean;
};
export type CollapseEmits = typeof collapseEmits;
