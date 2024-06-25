import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const radioProps: {
    readonly modelValue: PropType<string | number>;
    readonly label: StringConstructor;
    readonly value: PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly activeColor: StringConstructor;
    readonly size: PropType<ComicSize>;
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
export declare const radioEmits: {
    "update:modelValue": (val: string | number) => boolean;
    change: (value: boolean) => boolean;
};
export type RadioEmits = typeof radioEmits;
