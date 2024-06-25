const confirmOptions = {
  title: {
    type: String,
    default: "提示"
  },
  type: String,
  content: [String, Object],
  center: Boolean,
  cancelButtonText: {
    type: String,
    default: "取消"
  },
  confirmButtonText: {
    type: String,
    default: "确认"
  },
  icon: String,
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
};
const confirmProps = {
  ...confirmOptions,
  destroy: Function
};
export {
  confirmProps
};
