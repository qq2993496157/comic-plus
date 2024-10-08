import type { PropType, Component, VNode } from 'vue';
import type { ComicType2 } from '../../../../utils';

const confirmOptions = {
  title: {
    type: String,
    default: '提示'
  },
  type: String as PropType<ComicType2>,
  content: [String, Object] as PropType<string | VNode>,
  center: Boolean,
  cancelButtonText: {
    type: String,
    default: '取消'
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  },
  icon: Object as PropType<Component>,
  color: String,
  modeClose: Boolean,
  escClose: {
    type: Boolean,
    default: true
  },
  distinguishCloseAndCancel: Boolean,
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
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

export const confirmProps = {
  ...confirmOptions,
  destroy: Function
};

export type ConfirmOptions = {
  readonly title?: string;
  readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  readonly content?: string | VNode;
  readonly center?: boolean;
  readonly cancelButtonText?: string;
  readonly confirmButtonText?: string;
  readonly icon?: Component;
  readonly color?: string;
  readonly modeClose?: boolean;
  readonly escClose?: boolean;
  readonly distinguishCloseAndCancel?: boolean;
  readonly showConfirmButton?: boolean;
  readonly showCancelButton?: boolean;
  readonly showClose?: boolean;
  readonly showIcon?: boolean;
  readonly lockScroll?: boolean;
  readonly isVNode?: boolean;
  readonly customClass?: String;
  readonly modeClass?: String;
};
