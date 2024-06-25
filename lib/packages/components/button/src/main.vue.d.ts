
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly icon: StringConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly icon: StringConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: StringConstructor;
}>> & {
    onClick?: (evt: MouseEvent) => any;
}, {
    readonly circle: boolean;
    readonly disabled: boolean;
    readonly round: boolean;
    readonly plain: boolean;
    readonly loading: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
