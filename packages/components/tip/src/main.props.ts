import type { ExtractPropTypes, PropType, Component } from 'vue';
import type { ComicType, ComicSize } from '../../../utils';

export const tipProps = {
  type: String as PropType<ComicType>,
  plain: Boolean,
  size: String as PropType<ComicSize>,
  icon: Object as PropType<Component>,
  rolling: Boolean,
  color: String,
  closable: Boolean,
  hoverPause: {
    type: Boolean,
    default: true
  }
} as const;

export type TipProps = ExtractPropTypes<typeof tipProps>;

export const tipEmits = {
  close: () => true
};

export type TipEmits = typeof tipEmits;
