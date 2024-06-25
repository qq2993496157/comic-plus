import { ComicType } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const pistolProps: {
    readonly trigger: {
        readonly type: PropType<"hover" | "click">;
        readonly default: "hover";
    };
    readonly type: PropType<ComicType>;
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
        readonly type: PropType<"wheel" | "semi">;
        readonly default: "wheel";
    };
    readonly iteration: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly direction: {
        readonly type: PropType<"left" | "right" | "top" | "bottom">;
        readonly default: "top";
    };
    readonly icon: StringConstructor;
    readonly chooseAfterHide: BooleanConstructor;
};
export type PistolProps = ExtractPropTypes<typeof pistolProps>;
export declare const pistolEmits: {
    shoot: (sign?: string) => boolean;
    "trigger-click": (evt: MouseEvent) => boolean;
    open: () => boolean;
    close: () => boolean;
};
export type PistolEmits = typeof pistolEmits;
