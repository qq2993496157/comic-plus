
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly animated: BooleanConstructor;
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly animated: BooleanConstructor;
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly count: number;
    readonly loading: boolean;
    readonly animated: boolean;
    readonly rows: number;
    readonly throttle: number;
}, {}>, {
    template?(_: {}): any;
    default?(_: {
        [x: string]: unknown;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
