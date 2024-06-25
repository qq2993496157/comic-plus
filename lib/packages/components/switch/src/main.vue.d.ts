
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: import("vue").PropType<string | number | boolean>;
    readonly onText: StringConstructor;
    readonly offText: StringConstructor;
    readonly onValue: import("vue").PropType<string | number>;
    readonly offValue: import("vue").PropType<string | number>;
    readonly onColor: StringConstructor;
    readonly offColor: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly square: BooleanConstructor;
    readonly inlineText: BooleanConstructor;
    readonly onIcon: StringConstructor;
    readonly offIcon: StringConstructor;
    readonly changeBefore: import("vue").PropType<() => boolean | Promise<any>>;
    readonly loading: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => void;
    change: (val: string | number | boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("vue").PropType<string | number | boolean>;
    readonly onText: StringConstructor;
    readonly offText: StringConstructor;
    readonly onValue: import("vue").PropType<string | number>;
    readonly offValue: import("vue").PropType<string | number>;
    readonly onColor: StringConstructor;
    readonly offColor: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly square: BooleanConstructor;
    readonly inlineText: BooleanConstructor;
    readonly onIcon: StringConstructor;
    readonly offIcon: StringConstructor;
    readonly changeBefore: import("vue").PropType<() => boolean | Promise<any>>;
    readonly loading: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
}>> & {
    onChange?: (val: string | number | boolean) => any;
    "onUpdate:modelValue"?: (val: string | number | boolean) => any;
}, {
    readonly disabled: boolean;
    readonly square: boolean;
    readonly loading: boolean;
    readonly inlineText: boolean;
}, {}>;
export default _default;
