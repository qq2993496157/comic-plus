import { ExtractPropTypes, PropType } from 'vue';

export declare const dateTableProps: {
    readonly date: PropType<string | number | Date>;
    readonly flagTime: NumberConstructor;
};
export type DateTableProps = ExtractPropTypes<typeof dateTableProps>;
export declare const dateTableEmits: {
    change: (value: number) => boolean;
};
export type DateTableEmits = typeof dateTableEmits;
