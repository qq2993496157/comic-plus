
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: StringConstructor;
    readonly alpha: BooleanConstructor;
    readonly format: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly predefine: import("vue").PropType<string[]>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: StringConstructor;
    readonly alpha: BooleanConstructor;
    readonly format: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly predefine: import("vue").PropType<string[]>;
}>> & {
    onChange?: (value: string) => any;
    "onUpdate:modelValue"?: (value: string) => any;
}, {
    readonly disabled: boolean;
    readonly alpha: boolean;
}, {}>;
export default _default;
