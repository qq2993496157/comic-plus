import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue';
import type { TableProps } from './main.props';

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

export type RowOptions = {
  uid: number;
  isCheck: Ref<boolean>;
  row: TableData;
  updateCheck: (ckeck: boolean) => void;
};

export type Load = (data: TableData, _then: (arr: TableData[]) => void) => void;

export type TableProvide = {
  props: TableProps;
  checkList: Ref<TableData[]>;
  treeProps: TreeProps;
  changeSelection: () => void;
  addOption: (row: RowOptions) => void;
  removeOption: (uid: number) => void;
};

export const TABLE_PROVIDE: InjectionKey<TableProvide> = Symbol('TABLE_PROVIDE');
