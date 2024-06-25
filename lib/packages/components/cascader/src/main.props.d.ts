import { ComicSize } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export type Prop = {
    children?: string;
    label?: string;
    value?: string;
    separator?: string;
};
export type CascaderChild = {
    label?: string;
    value?: string;
    children?: string;
    disabled?: boolean;
    [key: string]: any;
};
export declare const cascaderProps: {
    readonly modelValue: {
        readonly type: PropType<any[]>;
        readonly default: readonly [];
    };
    readonly options: {
        readonly type: PropType<CascaderChild[]>;
        readonly default: readonly [];
    };
    readonly size: PropType<ComicSize>;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly arbitrarily: BooleanConstructor;
    readonly placeholder: StringConstructor;
    readonly prop: {
        readonly type: PropType<Prop>;
        readonly default: () => {
            children: string;
            label: string;
            value: string;
            separator: string;
        };
    };
};
export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
export declare const cascaderEmits: {
    "update:modelValue": (val: any[]) => boolean;
    change: (val: any[]) => boolean;
    clear: () => boolean;
};
export type CascaderEmits = typeof cascaderEmits;
