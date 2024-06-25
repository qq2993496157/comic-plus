
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | string[]>;
        readonly required: true;
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-time";
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly range: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | string[]>;
        readonly required: true;
    };
    readonly rangeSeparator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-time";
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly range: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
}>> & {
    onChange?: (value: string | string[]) => any;
    "onUpdate:modelValue"?: (value: string | string[]) => any;
    onClear?: () => any;
}, {
    readonly disabled: boolean;
    readonly icon: string;
    readonly clearable: boolean;
    readonly range: boolean;
    readonly rangeSeparator: string;
}, {}>;
export default _default;
