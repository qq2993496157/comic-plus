
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly trigger: {
        readonly type: import("vue").PropType<"hover" | "click" | "right-click">;
        readonly default: "hover";
    };
    readonly chooseAfterHide: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly button: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly buttonType: import("vue").PropType<import("../../../utils").ComicType>;
    readonly buttonIcon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-down";
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "menu-click": (value?: string) => void;
    "button-click": (evt: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly trigger: {
        readonly type: import("vue").PropType<"hover" | "click" | "right-click">;
        readonly default: "hover";
    };
    readonly chooseAfterHide: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly button: BooleanConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly buttonType: import("vue").PropType<import("../../../utils").ComicType>;
    readonly buttonIcon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-down";
    };
}>> & {
    "onMenu-click"?: (value?: string) => any;
    "onButton-click"?: (evt: MouseEvent) => any;
}, {
    readonly button: boolean;
    readonly trigger: "hover" | "click" | "right-click";
    readonly chooseAfterHide: boolean;
    readonly buttonIcon: string;
}, {}>, {
    default?(_: {}): any;
    dropdown?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
