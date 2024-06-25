declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    choose: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    disabled: BooleanConstructor;
}>> & {
    onChoose?: (...args: any[]) => any;
}, {
    disabled: boolean;
}, {}>, {
    trigger?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
