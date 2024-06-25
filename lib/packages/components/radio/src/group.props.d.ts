import { ComicSize } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const radioGroupProps: {
    readonly modelValue: PropType<string | number>;
    readonly size: PropType<ComicSize>;
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export declare const radioGroupEmits: {
    "update:modelValue": (val: string | number) => boolean;
    change: (val: string | number) => boolean;
};
export type RadioGroupEmits = typeof radioGroupEmits;
