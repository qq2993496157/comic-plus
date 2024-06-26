import type { PropType, ExtractPropTypes } from 'vue';
import type { ComicType } from '../../../utils';

export const badgeProps = {
  value: [Number, String] as PropType<number | string>,
  dot: Boolean,
  max: {
    type: Number,
    default: 99
  },
  type: {
    type: String as PropType<ComicType>,
    default: 'danger'
  },
  color: String,
  zeroShow: Boolean,
  ellipsis: {
    type: Boolean,
    default: true
  },
  offset: [Number, Array] as PropType<number | number[]>
} as const;

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
