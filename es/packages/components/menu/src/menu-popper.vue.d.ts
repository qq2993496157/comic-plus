declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    disabled: BooleanConstructor;
    fixed: BooleanConstructor;
    show: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "mouse-in": (...args: any[]) => void;
    "mouse-out": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    fixed: BooleanConstructor;
    show: BooleanConstructor;
}>> & {
    "onMouse-in"?: (...args: any[]) => any;
    "onMouse-out"?: (...args: any[]) => any;
}, {
    disabled: boolean;
    fixed: boolean;
    show: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
