import type { PropType, VNode } from 'vue';
import type { ComicType2 } from '../../../../utils';

const messageOptions = {
  type: String as PropType<ComicType2>,
  content: [String, Object] as PropType<string | VNode>,
  icon: String,
  color: String,
  showClose: Boolean,
  duration: {
    type: Number,
    default: 3000
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  isVNode: Boolean
} as const;

export const messageProps = {
  ...messageOptions,
  id: String,
  close: Function,
  destroy: Function
};

export type MessageOptions = {
  readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  readonly content?: string | VNode;
  readonly icon?: string;
  readonly color?: string;
  readonly showClose?: boolean;
  readonly duration?: number;
  readonly showIcon?: boolean;
  readonly isVNode?: boolean;
};
