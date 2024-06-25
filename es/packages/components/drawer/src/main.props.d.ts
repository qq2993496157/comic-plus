import { ExtractPropTypes, PropType } from 'vue';

export declare const drawerProps: {
    readonly modelValue: BooleanConstructor;
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly modeClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "right";
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly header: StringConstructor;
    readonly dimension: {
        readonly type: StringConstructor;
        readonly default: "30%";
    };
    readonly color: StringConstructor;
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
};
export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
export declare const drawerEmits: {
    "update:modelValue": (value: boolean) => boolean;
    close: () => boolean;
    open: () => boolean;
};
export type DrawerEmits = typeof drawerEmits;
