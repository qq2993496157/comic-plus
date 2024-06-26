import type { VNode } from 'vue';

export type LoadingInstance = {
  vnode: VNode;
  updateVisible: (visible: boolean) => void;
  destroy: () => void;
  close: () => void;
};

export type LoadingOptions = {
  readonly icon?: string;
  readonly text?: string;
  readonly blur?: boolean;
  readonly background?: string;
  readonly color?: string;
  readonly target?: HTMLElement;
};
