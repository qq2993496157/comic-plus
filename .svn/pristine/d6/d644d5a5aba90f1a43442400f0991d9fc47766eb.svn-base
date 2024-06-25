import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicType } from '../../../utils';

export const linkProps = {
  href: String,
  type: String as PropType<ComicType>,
  disabled: Boolean,
  underline: Boolean,
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | 'framename'>,
    default: '_blank'
  }
} as const;

export type LinkProps = ExtractPropTypes<typeof linkProps>;

export const linkEmits = {
  click: (evt: MouseEvent, href?: string) => evt instanceof MouseEvent
};

export type LinkEmits = typeof linkEmits;
