const tipProps = {
  type: String,
  plain: Boolean,
  size: String,
  icon: String,
  rolling: Boolean,
  color: String,
  closable: Boolean,
  hoverPause: {
    type: Boolean,
    default: true
  }
};
const tipEmits = {
  close: () => true
};
export {
  tipEmits,
  tipProps
};
