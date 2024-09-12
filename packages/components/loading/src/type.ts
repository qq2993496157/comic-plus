import type { Component, VNode } from 'vue';

export type LoadingInstance = {
  vnode: VNode;
  updateVisible: (visible: boolean) => void;
  destroy: () => void;
  close: () => void;
};

export type LoadingOptions = {
  readonly icon?: Component;
  readonly text?: string;
  readonly blur?: boolean;
  readonly background?: string;
  readonly color?: string;
  readonly target?: HTMLElement;
};
