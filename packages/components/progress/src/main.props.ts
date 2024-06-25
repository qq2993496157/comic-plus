import type { PropType, ExtractPropTypes } from 'vue';
import type { ComicType } from '../../../utils';

export const STATUS = {
  success: 'cu-icon-success',
  warning: 'cu-icon-warning',
  fail: 'cu-icon-close-one'
};

type Colos = string | Record<string, string> | ((value: number) => string);

export const progressProps = {
  progress: {
    type: Number,
    default: 0
  },
  type: {
    type: String as PropType<ComicType>,
    default: 'primary'
  },
  barType: {
    type: String as PropType<'line' | 'line-trends' | 'circle' | 'trends'>,
    default: 'line'
  },
  status: String as PropType<'success' | 'warning' | 'fail'>,
  size: {
    type: [String, Number] as PropType<string | number>,
    default: '120'
  },
  barWidth: Number,
  colors: [String, Object, Function] as PropType<Colos>,
  insetFormat: Boolean,
  format: String,
  showText: {
    type: Boolean,
    default: true
  }
} as const;

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
