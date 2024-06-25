import { ExtractPropTypes } from 'vue';

export declare const dialogProps: {
    readonly modelValue: BooleanConstructor;
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly modeClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly transitionClass: {
        readonly type: StringConstructor;
        readonly default: "cross-scale";
    };
    readonly header: StringConstructor;
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "70%";
    };
    readonly top: {
        readonly type: StringConstructor;
        readonly default: "15vh";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#ffffff";
    };
    readonly beforeClose: FunctionConstructor;
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appendTo: StringConstructor;
    readonly appendToBody: BooleanConstructor;
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
};
export type DialogProps = ExtractPropTypes<typeof dialogProps>;
export declare const dialogEmits: {
    "update:modelValue": (value: boolean) => boolean;
    close: () => boolean;
    open: () => boolean;
};
export type DialogEmits = typeof dialogEmits;
