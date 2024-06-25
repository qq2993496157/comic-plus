
declare function updateVisible(val: boolean): void;
declare const _default: import('vue').DefineComponent<{
    readonly icon: {
        readonly tyoe: StringConstructor;
        readonly default: "cu-icon-loading";
    };
    readonly defaultVisible: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly blur: BooleanConstructor;
    readonly background: StringConstructor;
    readonly color: StringConstructor;
    readonly target: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    readonly glabal: BooleanConstructor;
}, {
    visible: import("vue").Ref<boolean>;
    updateVisible: typeof updateVisible;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly icon: {
        readonly tyoe: StringConstructor;
        readonly default: "cu-icon-loading";
    };
    readonly defaultVisible: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly blur: BooleanConstructor;
    readonly background: StringConstructor;
    readonly color: StringConstructor;
    readonly target: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    readonly glabal: BooleanConstructor;
}>>, {
    readonly blur: boolean;
    readonly icon: "cu-icon-loading";
    readonly defaultVisible: boolean;
    readonly glabal: boolean;
}, {}>;
export default _default;
