import { ComicSize } from '../../../utils';
import { TableOption, TableData, TreeProps, Load } from './type';
import { PropType, ExtractPropTypes } from 'vue';

export declare const tableProps: {
    readonly height: StringConstructor;
    readonly size: PropType<ComicSize>;
    readonly data: PropType<TableData[]>;
    readonly options: PropType<TableOption>;
    readonly treeProps: PropType<TreeProps>;
    readonly lazyLoad: BooleanConstructor;
    readonly load: PropType<Load>;
    readonly expand: BooleanConstructor;
    readonly headerClassName: StringConstructor;
    readonly bodyClassName: StringConstructor;
};
export type TableProps = ExtractPropTypes<typeof tableProps>;
export declare const tableEmits: {
    "select-change": (val: any) => boolean;
};
export type TableEmits = typeof tableEmits;
