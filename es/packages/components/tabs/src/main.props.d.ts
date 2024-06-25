import { PropType, ExtractPropTypes } from 'vue';

export declare const tabsProps: {
    readonly modelValue: PropType<string | number>;
    readonly type: {
        readonly type: PropType<"circle" | "line" | "card">;
        readonly default: "line";
    };
    readonly color: StringConstructor;
    readonly onlyTab: BooleanConstructor;
    readonly closable: BooleanConstructor;
};
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const tabsEmits: {
    'update:modelValue': (value: string | number) => boolean;
    change: (value: string | number) => boolean;
    'tab-remove': (value: string | number) => boolean;
};
export type TabsEmits = typeof tabsEmits;
