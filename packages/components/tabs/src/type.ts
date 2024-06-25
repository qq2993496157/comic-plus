import { InjectionKey, VNode } from 'vue';
import type { TabsProps } from './main.props';
import type { TabPaneProps } from './pane.props';

export type PaneInstance = {
  slots: VNode[];
} & TabPaneProps;

export type TabsProvide = {
  props: TabsProps;
  addTab: (pane: PaneInstance) => void;
  removeTab: (anme: string | number) => void;
};

export const TABS_PROVIDE: InjectionKey<TabsProvide> = Symbol('TABS_PROVIDE');
