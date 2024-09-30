import { Component, ExtractPropTypes, PropType } from 'vue';

type link = {
  content?: string;
  icon?: Component;
  href?: string;
  blankTarget?: boolean;
};

export const webFooterProps = {
  underline: Boolean,
  links: Array as PropType<link[]>,
  copyright: String
} as const;

export type WebFooterProps = ExtractPropTypes<typeof webFooterProps>;
