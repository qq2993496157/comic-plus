import type { PropType, VNode } from 'vue';
import type { ComicType2 } from '../../../../utils';

const alertOptions = {
  title: {
    type: String,
    default: '提示'
  },
  type: String as PropType<ComicType2>,
  content: [String, Object] as PropType<string | VNode>,
  closeButtonText: {
    type: String,
    default: '关闭'
  },
  icon: String,
  color: String,
  center: Boolean,
  modeClose: Boolean,
  escClose: {
    type: Boolean,
    default: true
  },
  showButton: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  isVNode: Boolean,
  customClass: String,
  modeClass: String
} as const;

export const alertProps = {
  ...alertOptions,
  destroy: Function
} as const;

export type AlertOptions = {
  readonly title?: string;
  readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  readonly content?: string | VNode;
  readonly closeButtonText?: string;
  readonly icon?: string;
  readonly color?: string;
  readonly center?: boolean;
  readonly modeClose?: boolean;
  readonly escClose?: boolean;
  readonly showButton?: boolean;
  readonly showClose?: boolean;
  readonly showIcon?: boolean;
  readonly lockScroll?: boolean;
  readonly customClass?: String;
  readonly modeClass?: String;
  readonly isVNode?: boolean;
};
