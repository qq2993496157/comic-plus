import { ExtractPropTypes, PropType } from 'vue';

type link = {
  content?: string;
  icon?: string;
  href?: string;
  blankTarget?: boolean;
};

export const webFooterProps = {
  links: Array as PropType<link[]>,
  copyright: String
} as const;

export type WebFooterProps = ExtractPropTypes<typeof webFooterProps>;
