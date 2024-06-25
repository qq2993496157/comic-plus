
declare function setBarTop(top: number, beh?: any): void;
declare function setBarLeft(left: number, beh?: any): void;
declare function getScrollEvent(): HTMLElement;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly height: StringConstructor;
    readonly display: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "hover";
    };
    readonly maxHeight: StringConstructor;
}, {
    setBarTop: typeof setBarTop;
    setBarLeft: typeof setBarLeft;
    getScrollEvent: typeof getScrollEvent;
    hasThumby: import("vue").Ref<boolean>;
    hasThumbx: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (evt: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: StringConstructor;
    readonly display: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "hover";
    };
    readonly maxHeight: StringConstructor;
}>> & {
    onScroll?: (evt: Event) => any;
}, {
    readonly display: import("../../../utils").ComicDisplay;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
