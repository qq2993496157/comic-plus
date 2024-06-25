
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 0.5;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly min: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "40px";
    };
    readonly max: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "40px";
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number) => void;
    drag: (evt: MouseEvent) => void;
    "drag-start": () => void;
    "drag-end": () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 0.5;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("../../../utils").ComicDir>;
        readonly default: "horizontal";
    };
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly min: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "40px";
    };
    readonly max: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: "40px";
    };
}>> & {
    onDrag?: (evt: MouseEvent) => any;
    "onUpdate:modelValue"?: (val: string | number) => any;
    "onDrag-start"?: () => any;
    "onDrag-end"?: () => any;
}, {
    readonly lineWeight: number;
    readonly mode: import("../../../utils").ComicDir;
    readonly max: string | number;
    readonly modelValue: string | number;
    readonly min: string | number;
}, {}>, {
    start?(_: {}): any;
    end?(_: {}): any;
    line?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
