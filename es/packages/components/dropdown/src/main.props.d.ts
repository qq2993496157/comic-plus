import { ComicType, ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const dropdownProps: {
    readonly trigger: {
        readonly type: PropType<"hover" | "click" | "right-click">;
        readonly default: "hover";
    };
    readonly chooseAfterHide: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly button: BooleanConstructor;
    readonly size: PropType<ComicSize>;
    readonly buttonType: PropType<ComicType>;
    readonly buttonIcon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-down";
    };
};
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export declare const dropdownEmits: {
    "menu-click": (value?: string) => boolean;
    "button-click": (evt: MouseEvent) => boolean;
};
export type DropdownEmits = typeof dropdownEmits;
