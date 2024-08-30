import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicType } from '../../../utils';

export const tagProps = {
  type: String as PropType<ComicType>,
  // mode: String as PropType<'light' | 'plain'>,
  plain: Boolean,
  light: Boolean,
  border: Boolean,
  size: {
    type: Number,
    default: 22
  },
  closable: Boolean,
  transition: Boolean,
  color: String
} as const;
export type TagProps = ExtractPropTypes<typeof tagProps>;

export const tagEmits = {
  close: () => true
};

export type TagEmits = typeof tagEmits;
