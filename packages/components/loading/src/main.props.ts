import { Component, PropType, VNode } from 'vue';

export const loadingProps = {
  icon: Object as PropType<Component | VNode>,
  defaultVisible: {
    type: Boolean,
    default: true
  },
  text: String,
  blur: Boolean,
  background: String,
  color: String,
  target: HTMLElement,
  global: Boolean
} as const;

export type LoadingProps = {
  readonly icon?: Component | VNode;
  readonly defaultVisible?: boolean;
  readonly text?: string;
  readonly blur?: boolean;
  readonly background?: string;
  readonly color?: string;
  readonly target?: HTMLElement;
  readonly global?: boolean;
};
