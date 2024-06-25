import { TabPaneProps } from './pane.props';
import { TabsProps } from './main.props';
import { InjectionKey, VNode } from 'vue';

export type PaneInstance = {
    slots: VNode[];
} & TabPaneProps;
export type TabsProvide = {
    props: TabsProps;
    addTab: (pane: PaneInstance) => void;
    removeTab: (anme: string | number) => void;
};
export declare const TABS_PROVIDE: InjectionKey<TabsProvide>;
