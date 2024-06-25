
declare function handleClick(href: string): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly container: {
        readonly type: import("vue").PropType<string | Window | HTMLElement>;
        readonly default: Window & typeof globalThis;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"vertical" | "horizontal">;
        readonly default: "vertical";
    };
    readonly lineWeight: NumberConstructor;
    readonly showLine: BooleanConstructor;
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly color: StringConstructor;
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
}, {
    changeAnchor: typeof handleClick;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (href: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly container: {
        readonly type: import("vue").PropType<string | Window | HTMLElement>;
        readonly default: Window & typeof globalThis;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"vertical" | "horizontal">;
        readonly default: "vertical";
    };
    readonly lineWeight: NumberConstructor;
    readonly showLine: BooleanConstructor;
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly color: StringConstructor;
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
}>> & {
    onChange?: (href: string) => any;
}, {
    readonly offset: number;
    readonly container: string | Window | HTMLElement;
    readonly direction: "vertical" | "horizontal";
    readonly showLine: boolean;
    readonly duration: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
