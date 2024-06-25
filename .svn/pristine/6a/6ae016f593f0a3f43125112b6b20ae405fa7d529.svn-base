import type { Ref, InjectionKey } from 'vue';
import type { AnchorProps } from './main.props';

export type AnchorProvide = {
  props: AnchorProps;
  currentHref: Ref<string>;
  handleClick: (href: string) => void;
  addLinkItem: (item: AnchorLinkInstance) => void;
  removeLinkItem: (href: string) => void;
};

export type AnchorLinkInstance = {
  href: string;
  ele: Ref<any>;
};

export const ANCHOR_PROVIDE: InjectionKey<AnchorProvide> = Symbol('ANCHOR_PROVIDE');
