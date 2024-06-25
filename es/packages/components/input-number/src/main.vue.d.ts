
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: NumberConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: number) => void;
    focus: (evt: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: NumberConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly disabled: BooleanConstructor;
}>> & {
    onChange?: (value: number) => any;
    onFocus?: (evt: FocusEvent) => any;
    onBlur?: (evt: FocusEvent) => any;
    "onUpdate:modelValue"?: (value: number) => any;
}, {
    readonly disabled: boolean;
    readonly step: number;
}, {}>;
export default _default;
