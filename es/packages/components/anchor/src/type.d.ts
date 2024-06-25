import { AnchorProps } from './main.props';
import { Ref, InjectionKey } from 'vue';

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
export declare const ANCHOR_PROVIDE: InjectionKey<AnchorProvide>;
