const alertOptions = {
  title: {
    type: String,
    default: "提示"
  },
  type: String,
  content: [String, Object],
  closeButtonText: {
    type: String,
    default: "关闭"
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
};
const alertProps = {
  ...alertOptions,
  destroy: Function
};
export {
  alertProps
};
