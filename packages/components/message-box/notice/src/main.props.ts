import type { Component, ExtractPropTypes, PropType, VNode } from 'vue';
import type { ComicType2 } from '../../../../utils';

export const noticeProps = {
  position: {
    type: String as PropType<'lt' | 'lb' | 'rt' | 'rb'>,
    default: 'rt'
  },
  type: String as PropType<ComicType2>,
  title: String,
  content: [String, Object] as PropType<string | VNode>,
  icon: Object as PropType<Component>,
  color: String,
  showClose: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  isVNode: Boolean,
  click: Function
} as const;

export type NoticeOptions = {
  readonly position?: 'lt' | 'lb' | 'rt' | 'rb';
  readonly type?: ComicType2;
  readonly title?: string;
  readonly content?: string | VNode;
  readonly icon?: Component;
  readonly color?: string;
  readonly showClose?: boolean;
  readonly duration?: number;
  readonly isVNode?: boolean;
  readonly click?: (close: () => void) => void;
};
