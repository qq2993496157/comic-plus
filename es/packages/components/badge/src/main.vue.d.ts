
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly value: import("vue").PropType<string | number>;
    readonly dot: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("../../../utils").ComicType>;
        readonly default: "danger";
    };
    readonly color: StringConstructor;
    readonly zeroShow: BooleanConstructor;
    readonly ellipsis: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: import("vue").PropType<number | number[]>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: import("vue").PropType<string | number>;
    readonly dot: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly type: {
        readonly type: import("vue").PropType<import("../../../utils").ComicType>;
        readonly default: "danger";
    };
    readonly color: StringConstructor;
    readonly zeroShow: BooleanConstructor;
    readonly ellipsis: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: import("vue").PropType<number | number[]>;
}>>, {
    readonly type: import("../../../utils").ComicType;
    readonly dot: boolean;
    readonly max: number;
    readonly zeroShow: boolean;
    readonly ellipsis: boolean;
}, {}>, {
    default?(_: {}): any;
    corner?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
