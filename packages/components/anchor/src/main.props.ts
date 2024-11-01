import type { ExtractPropTypes, PropType } from 'vue';
import { ComicSize, isString } from '../../../utils';

export const anchorProps = {
  container: {
    type: [String, HTMLElement, Window] as PropType<string | HTMLElement | Window>,
    default: window
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical'
  },
  lineWeight: Number,
  showLine: Boolean,
  offset: {
    type: Number,
    default: 0
  },
  size: String as PropType<ComicSize>,
  color: String,
  duration: {
    type: Number,
    default: 500
  },
  anchorAnimation: Boolean
} as const;

export type AnchorProps = ExtractPropTypes<typeof anchorProps>;

export const anchorEmits = {
  change: (href: string) => isString(href)
};

export type AnchorEmits = typeof anchorEmits;
