
declare function next(): void;
declare function prev(): void;
declare function setActiveIndex(num: number): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    readonly mode: {
        readonly type: import("vue").PropType<"transform" | "opacity">;
        readonly default: "transform";
    };
    readonly autoPlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly arrow: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "hover";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly defaultIndex: NumberConstructor;
    readonly pauseOnHover: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 3000;
        readonly validator: (value: number) => boolean;
    };
}, {
    next: typeof next;
    prev: typeof prev;
    setActiveIndex: typeof setActiveIndex;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "300px";
    };
    readonly mode: {
        readonly type: import("vue").PropType<"transform" | "opacity">;
        readonly default: "transform";
    };
    readonly autoPlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly arrow: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDisplay>;
        readonly default: "hover";
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly defaultIndex: NumberConstructor;
    readonly pauseOnHover: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 3000;
        readonly validator: (value: number) => boolean;
    };
}>> & {
    onChange?: (value: number) => any;
}, {
    readonly height: string;
    readonly direction: import("../../../utils").ComicDir;
    readonly mode: "transform" | "opacity";
    readonly autoPlay: boolean;
    readonly arrow: import("../../../utils").ComicDisplay;
    readonly showIndicator: boolean;
    readonly pauseOnHover: boolean;
    readonly delay: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
