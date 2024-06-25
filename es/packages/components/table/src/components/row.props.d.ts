import { TableData } from '../type';
import { ExtractPropTypes, PropType } from 'vue';

export declare const tableRowProps: {
    readonly row: PropType<TableData>;
    readonly index: NumberConstructor;
    readonly calcPaddingLeft: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type TableRowProps = ExtractPropTypes<typeof tableRowProps>;
