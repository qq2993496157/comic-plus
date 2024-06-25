import type { PropType, ExtractPropTypes } from 'vue';

export const ellipsisProps = {
  data: Array as PropType<any[]>,
  text: String,
  type: {
    type: String as PropType<'text' | 'data'>,
    default: 'text'
  },
  openText: {
    type: String,
    default: '展开'
  },
  closeText: {
    type: String,
    default: '收起'
  },
  clamp: {
    type: Number,
    default: 2
  }
} as const;

export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
