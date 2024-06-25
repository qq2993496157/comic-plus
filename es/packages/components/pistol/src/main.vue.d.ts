
declare function open(): void;
declare function close(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly trigger: {
        readonly type: import("vue").PropType<"hover" | "click">;
        readonly default: "hover";
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly equal: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly mode: {
        readonly type: import("vue").PropType<"wheel" | "semi">;
        readonly default: "wheel";
    };
    readonly iteration: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "top";
    };
    readonly icon: StringConstructor;
    readonly chooseAfterHide: BooleanConstructor;
}, {
    open: typeof open;
    close: typeof close;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
    open: () => void;
    "trigger-click": (evt: MouseEvent) => void;
    shoot: (sign?: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly trigger: {
        readonly type: import("vue").PropType<"hover" | "click">;
        readonly default: "hover";
    };
    readonly type: import("vue").PropType<import("../../../utils").ComicType>;
    readonly color: StringConstructor;
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly equal: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly mode: {
        readonly type: import("vue").PropType<"wheel" | "semi">;
        readonly default: "wheel";
    };
    readonly iteration: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "top";
    };
    readonly icon: StringConstructor;
    readonly chooseAfterHide: BooleanConstructor;
}>> & {
    onClose?: () => any;
    onOpen?: () => any;
    "onTrigger-click"?: (evt: MouseEvent) => any;
    onShoot?: (sign?: string) => any;
}, {
    readonly size: number;
    readonly direction: "left" | "right" | "top" | "bottom";
    readonly mode: "wheel" | "semi";
    readonly trigger: "hover" | "click";
    readonly chooseAfterHide: boolean;
    readonly equal: boolean;
    readonly iteration: boolean;
}, {}>, {
    default?(_: {}): any;
    magazine?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
