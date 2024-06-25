const buttonProps = {
  type: String,
  size: String,
  disabled: Boolean,
  plain: Boolean,
  icon: String,
  round: Boolean,
  circle: Boolean,
  color: String,
  loading: Boolean,
  loadingIcon: String
};
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const buttonGroupProps = {
  round: Boolean,
  size: String
};
export {
  buttonEmits,
  buttonGroupProps,
  buttonProps
};
