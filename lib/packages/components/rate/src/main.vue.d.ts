
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
        readonly validator: (value: number) => boolean;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
        readonly validator: (value: number) => boolean;
    };
    readonly allowHalf: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly texts: import("vue").PropType<string[]>;
    readonly icons: {
        readonly type: import("vue").PropType<string | string[]>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#f7ba2a";
    };
    readonly unColor: {
        readonly type: StringConstructor;
        readonly default: "#999999";
    };
    readonly variableIcon: FunctionConstructor;
    readonly variableColor: FunctionConstructor;
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    change: (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
        readonly validator: (value: number) => boolean;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 20;
        readonly validator: (value: number) => boolean;
    };
    readonly allowHalf: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly texts: import("vue").PropType<string[]>;
    readonly icons: {
        readonly type: import("vue").PropType<string | string[]>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#f7ba2a";
    };
    readonly unColor: {
        readonly type: StringConstructor;
        readonly default: "#999999";
    };
    readonly variableIcon: FunctionConstructor;
    readonly variableColor: FunctionConstructor;
    readonly disabled: BooleanConstructor;
}>> & {
    onChange?: (value: number) => any;
    "onUpdate:modelValue"?: (value: number) => any;
}, {
    readonly size: number;
    readonly disabled: boolean;
    readonly color: string;
    readonly count: number;
    readonly modelValue: number;
    readonly clearable: boolean;
    readonly showText: boolean;
    readonly allowHalf: boolean;
    readonly unColor: string;
}, {}>, {
    text?(_: {
        value: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
