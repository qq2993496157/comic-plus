import { CSSProperties, ComputedRef, InjectionKey, Ref, VNode } from 'vue';
import { TableColumnProps } from './table-column/column.props';
import { TableV2Emits, TableV2Props } from './main.props';
import { UseTableReturn, UseTableStyleReturn } from './util';

export type TableData = Record<string, any>;

export type Span =
  | number[]
  | {
      rowspan: number;
      colspan: number;
    };

export type TreeProps = {
  children?: string;
  hasChildren?: boolean;
};

export type Column = {
  uid: number;
  props: TableColumnProps;
  type: TableColumnProps['type'];
  fixed: 'left' | 'right' | null;
  style: CSSProperties;
  default: (...args: any[]) => VNode[];
  header: (...args: any[]) => VNode[];
  icon: (...args: any[]) => VNode[];
};

export type RenderData = {
  row: TableData;
  selection: boolean;
  _key?: any;
  _parentKey?: any;
  _level?: number;
  show?: boolean;
  display?: boolean;
  treeExpand?: boolean;
  loading?: boolean;
  hasChildren?: () => boolean;
  expand?: () => boolean;
};

export type UseTableOptions = {
  props: TableV2Props;
  emit: TableV2Emits;
  columns: Ref<Column[]>;
};
export type UseTableStyleOptions = {
  containerRef: Ref<HTMLElement>;
  props: TableV2Props;
  columns: Ref<Column[]>;
  MIN_SIZE: number;
};

export type ColumnRecord = Record<string, Column>;

export type TableProvide = {
  props: TableV2Props;
  columns: Ref<Column[]>;
  getFixedIndex: ComputedRef<{ left: number; right: number }>;
  addColumn: (column: Column) => void;
  removeColumn: (id: number) => void;
} & UseTableStyleReturn &
  UseTableReturn;

export const TABLE_V2_PROVIDE: InjectionKey<TableProvide> = Symbol('TABLE_V2_PROVIDE');