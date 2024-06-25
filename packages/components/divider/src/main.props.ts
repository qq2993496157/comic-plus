import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicType, ComicDir } from '../../../utils';

export const POSITION_ENUM = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end'
};
export type BorderStyle = CSSStyleDeclaration['borderStyle'];

export const dividerProps = {
  direction: {
    type: String as PropType<ComicDir>,
    default: 'horizontal'
  },
  type: String as PropType<ComicType>,
  color: String,
  lineWeight: {
    type: Number,
    default: 1
  },
  contentPosition: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  lineStyle: String as PropType<BorderStyle>
} as const;

export type DividerProps = ExtractPropTypes<typeof dividerProps>;
