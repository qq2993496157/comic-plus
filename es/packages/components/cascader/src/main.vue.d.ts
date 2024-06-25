
declare const _default: import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any[]>;
        readonly default: readonly [];
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./main.props").CascaderChild[]>;
        readonly default: readonly [];
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly arbitrarily: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly prop: {
        readonly type: import("vue").PropType<import("./main.props").Prop>;
        readonly default: () => {
            children: string;
            label: string;
            value: string;
            separator: string;
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: any[]) => void;
    change: (val: any[]) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any[]>;
        readonly default: readonly [];
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./main.props").CascaderChild[]>;
        readonly default: readonly [];
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly arbitrarily: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly prop: {
        readonly type: import("vue").PropType<import("./main.props").Prop>;
        readonly default: () => {
            children: string;
            label: string;
            value: string;
            separator: string;
        };
    };
}>> & {
    onChange?: (val: any[]) => any;
    "onUpdate:modelValue"?: (val: any[]) => any;
    onClear?: () => any;
}, {
    readonly disabled: boolean;
    readonly options: import("./main.props").CascaderChild[];
    readonly modelValue: any[];
    readonly clearable: boolean;
    readonly arbitrarily: boolean;
    readonly prop: {
        children: string;
        label: string;
        value: string;
        separator: string;
    };
}, {}>;
export default _default;
