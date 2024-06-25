import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicDisplay } from '../../../utils';

export const cardProps = {
  shadow: {
    type: String as PropType<ComicDisplay>,
    default: 'always'
  },
  turnCard: Boolean,
  turnType: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover'
  }
} as const;

export type CardProps = ExtractPropTypes<typeof cardProps>;
