import { ExtractPropTypes, PropType } from 'vue';
import type { TableData } from '../type';

export const tableRowProps = {
  row: Object as PropType<TableData>,
  index: Number,
  calcPaddingLeft: {
    type: Number,
    default: 20
  },
  show: {
    type: Boolean,
    default: true
  }
} as const;

export type TableRowProps = ExtractPropTypes<typeof tableRowProps>;
