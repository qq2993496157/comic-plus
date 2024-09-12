import { Component, PropType, VNode } from 'vue';
import { Loading } from '../../../icons';

export const loadingProps = {
  icon: {
    type: Object as PropType<Component | VNode>,
    default: Loading
  },
  defaultVisible: {
    type: Boolean,
    default: true
  },
  text: String,
  blur: Boolean,
  background: String,
  color: String,
  target: HTMLElement,
  glabal: Boolean
} as const;

export type LoadingProps = {
  readonly icon?: Component | VNode;
  readonly defaultVisible?: boolean;
  readonly text?: string;
  readonly blur?: boolean;
  readonly background?: string;
  readonly color?: string;
  readonly target?: HTMLElement;
  readonly glabal?: boolean;
};
