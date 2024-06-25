import { ChildNodeInstance } from './type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly data: ObjectConstructor;
    readonly node: import("vue").PropType<number[]>;
    readonly parentNode: ObjectConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "change-show": (uid: number) => void;
    "push-nodes": (child: ChildNodeInstance) => void;
    "change-check": () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: ObjectConstructor;
    readonly node: import("vue").PropType<number[]>;
    readonly parentNode: ObjectConstructor;
}>> & {
    "onChange-show"?: (uid: number) => any;
    "onPush-nodes"?: (child: ChildNodeInstance) => any;
    "onChange-check"?: () => any;
}, {}, {}>, {
    default?(_: any): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
