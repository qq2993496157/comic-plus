import { ExtractPropTypes, PropType, VNode } from 'vue';
import { ComicDir } from '../../../utils';

export const spaceProps = {
  wrap: Boolean,
  size: {
    type: [Number, String] as PropType<number | 'small' | 'default' | 'large'>,
    default: 'default'
  },
  direction: {
    type: String as PropType<ComicDir>,
    default: 'horizontal'
  },
  split: [String, Object] as PropType<string | VNode>,
  align: {
    type: String as PropType<'center' | 'flex-start' | 'flex-end'>,
    default: 'center'
  },
  fill: Boolean,
  fillRatio: {
    type: Number,
    default: 100
  }
} as const;

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
