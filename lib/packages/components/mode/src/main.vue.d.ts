import { PropType } from 'vue';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendTo: {
        type: StringConstructor;
        default: string;
    };
    show: BooleanConstructor;
    customClass: PropType<string | string[]>;
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    open: (...args: any[]) => void;
    "mode-click": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendTo: {
        type: StringConstructor;
        default: string;
    };
    show: BooleanConstructor;
    customClass: PropType<string | string[]>;
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    "onMode-click"?: (...args: any[]) => any;
}, {
    appendToBody: boolean;
    appendTo: string;
    show: boolean;
    lockScroll: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
