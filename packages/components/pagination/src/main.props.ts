import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicSize } from '../../../utils';

type PagerCount = 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21;

export const paginationProps = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: Array as PropType<number[]>,
  pagerCount: {
    type: Number as PropType<PagerCount>,
    default: 7
  },
  layout: {
    type: Array as PropType<('total' | 'sizes' | 'pages' | 'jumper')[]>,
    default: ['pages']
  },
  size: String as PropType<ComicSize>,
  background: Boolean
} as const;

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;

const isValidValue = (value: number) => typeof value === 'number';

export const paginationEmits = {
  ['update:currentPage']: isValidValue,
  ['update:pageSize']: isValidValue,
  ['current-change']: isValidValue,
  ['size-change']: isValidValue
};

export type PaginationEmits = typeof paginationEmits;
