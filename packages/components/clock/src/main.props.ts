import { ExtractPropTypes, PropType } from 'vue';
import { ComicSize, ComicDisplay, ComicType } from '../../../utils';

type LayoutKeys = 'numbers' | 'marks' | 'date' | 'second_marks';

export const clockProps = {
  type: {
    type: String as PropType<'circle' | 'number'>,
    default: 'circle'
  },
  size: String as PropType<ComicSize>,
  modules: {
    type: Array as PropType<LayoutKeys[]>,
    default: ['marks']
  },
  color: String as PropType<ComicType | string>,
  shadow: {
    type: String as PropType<ComicDisplay>,
    default: 'always'
  },
  romanText: Boolean
} as const;

export type ClockProps = ExtractPropTypes<typeof clockProps>;
