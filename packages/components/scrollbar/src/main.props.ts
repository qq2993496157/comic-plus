import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicDisplay } from '../../../utils';

export const scrollbarProps = {
  height: String,
  display: {
    type: String as PropType<ComicDisplay>,
    default: 'hover'
  },
  maxHeight: String
} as const;

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;

export const scrollbarEmits = {
  scroll: (evt: Event) => evt instanceof Event
};

export type ScrollbarEmits = typeof scrollbarEmits;
