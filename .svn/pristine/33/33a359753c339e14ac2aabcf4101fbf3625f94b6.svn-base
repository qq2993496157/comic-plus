import type { PropType, ExtractPropTypes } from 'vue';
import type { TableOption, TableData, TreeProps, Load } from './type';
import type { ComicSize } from '../../../utils';

export const tableProps = {
  height: String,
  size: String as PropType<ComicSize>,
  data: Array as PropType<TableData[]>,
  options: Object as PropType<TableOption>,
  treeProps: Object as PropType<TreeProps>,
  lazyLoad: Boolean,
  load: Function as PropType<Load>,
  expand: Boolean,
  headerClassName: String,
  bodyClassName: String
} as const;

export type TableProps = ExtractPropTypes<typeof tableProps>;

export const tableEmits = {
  ['select-change']: (val: any) => true
};

export type TableEmits = typeof tableEmits;
