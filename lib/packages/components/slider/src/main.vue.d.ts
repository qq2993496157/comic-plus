
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<number | number[]>;
        readonly required: true;
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly range: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (value: number) => boolean;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
        readonly validator: (value: number) => boolean;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly showStep: BooleanConstructor;
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("../../../utils").Arrayable<number>) => void;
    input: (value: import("../../../utils").Arrayable<number>) => void;
    change: (value: import("../../../utils").Arrayable<number>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<number | number[]>;
        readonly required: true;
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly range: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
        readonly validator: (value: number) => boolean;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
        readonly validator: (value: number) => boolean;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly showStep: BooleanConstructor;
    readonly disabled: BooleanConstructor;
}>> & {
    onChange?: (value: import("../../../utils").Arrayable<number>) => any;
    onInput?: (value: import("../../../utils").Arrayable<number>) => any;
    "onUpdate:modelValue"?: (value: import("../../../utils").Arrayable<number>) => any;
}, {
    readonly disabled: boolean;
    readonly max: number;
    readonly range: boolean;
    readonly min: number;
    readonly step: number;
    readonly showStep: boolean;
}, {}>;
export default _default;
