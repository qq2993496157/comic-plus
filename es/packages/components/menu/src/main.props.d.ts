import { ComicDir } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const menuProps: {
    readonly modelValue: StringConstructor;
    readonly mode: {
        readonly type: PropType<ComicDir>;
        readonly default: "vertical";
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly backgroundColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly activeBackgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly collapse: BooleanConstructor;
};
export type MenuProps = ExtractPropTypes<typeof menuProps>;
export declare const menuEmits: {
    "update:modelValue": (value: string) => boolean;
    "menu-click": (value: string) => boolean;
};
export type MenuEmits = typeof menuEmits;
