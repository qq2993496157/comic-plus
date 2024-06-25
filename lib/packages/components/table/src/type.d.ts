import { TableProps } from './main.props';
import { CSSProperties, InjectionKey, Ref } from 'vue';

export type TableColumn = {
    label?: string;
    prop?: string;
    width?: number;
    align?: CSSProperties['text-align'];
    fixed?: string;
    className?: string | ((row: any, rowIdx: number, col: any, colIdx: number) => string);
};
export type TableOption = {
    column: TableColumn[];
    border?: boolean;
    selection?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    stripe?: boolean;
    stripeColors?: string[];
    empty?: string;
};
export type Tableresize = {
    width: number;
    height: number;
    flexWidth: number;
    leftShadow: boolean;
    rightShadow: boolean;
    scrollWidth: number;
};
export type TreeProps = {
    children: string;
    hasChildren?: string;
};
export type TableData = {
    rowClassName?: string;
    [key: string]: any;
};
export type Load = (data: TableData, _then: (arr: TableData[]) => void) => void;
export type TableProvide = {
    props: TableProps;
    checkList: Ref<TableData[]>;
    treeProps: TreeProps;
    changeSelection: (val: boolean, item: TableData) => void;
    addOption: (datas: TableData[]) => void;
};
export declare const TABLE_PROVIDE: InjectionKey<TableProvide>;
