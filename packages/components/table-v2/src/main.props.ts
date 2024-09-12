import { CSSProperties, ExtractPropTypes, PropType, VNode } from 'vue';
import { Span, TableData, TreeProps } from './type';
import { ComicSize } from '../../../utils';
import { TableColumnProps } from './table-column/column.props';

export const tableV2Props = {
  data: Array as PropType<TableData[]>,
  border: Boolean,
  size: String as PropType<ComicSize>,
  showHeader: {
    type: Boolean,
    default: true
  },
  height: String,
  maxHeight: String,
  headerRowClass: String,
  headerCellClass: [String, Function] as PropType<string | ((data: { col: any; colIndex: number }) => string)>,
  rowClass: [String, Function] as PropType<string | ((data: { row: any; rowIndex: number }) => string)>,
  cellClass: [String, Function] as PropType<
    string | ((data: { row: any; rowIndex: number; col: any; colIndex: number }) => string)
  >,
  headerRowStyle: Object as PropType<CSSProperties>,
  headerCellStyle: [Object, Function] as PropType<
    CSSProperties | ((data: { col: any; colIndex: number }) => CSSProperties)
  >,
  rowStyle: [Object, Function] as PropType<CSSProperties | ((data: { row: any; rowIndex: number }) => CSSProperties)>,
  cellStyle: [Object, Function] as PropType<
    CSSProperties | ((data: { row: any; rowIndex: number; col: any; colIndex: number }) => CSSProperties)
  >,
  stripe: Boolean,
  stripeColors: Array as PropType<CSSProperties['color'][]>,
  highlightCurrentRow: Boolean,
  highlightColor: String as PropType<CSSProperties['color']>,
  rowKey: String,
  treeProps: Object as PropType<TreeProps>,
  indent: {
    type: Number,
    default: 15
  },
  lazy: Boolean,
  load: Function as PropType<(row: TableData, resolve: (arr: TableData[]) => void) => void>,
  showSummary: Boolean,
  sumText: {
    type: String,
    default: '合计'
  },
  summaryMethod: Function as PropType<
    (params: { columns: TableColumnProps[]; datas: TableData[] }) => (string | number | VNode)[]
  >,
  spanMethod: Function as PropType<
    (params: { row: TableData; rowIndex: number; col: TableColumnProps; colIndex: number }) => Span
  >,
  nullSymbol: String
} as const;

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>;

export const tableV2Emits = {
  'select-row': (value: TableData[]) => true,
  'current-change': (value: TableData, oldValue: TableData) => true
};

// export type TableV2Emits = typeof tableV2Emits;
export type TableV2Emits = {
  (event: 'select-row', value: TableData[]): void;
  (event: 'current-change', value: TableData, oldValue: TableData): void;
};
