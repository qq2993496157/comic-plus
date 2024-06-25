const dropdownProps = {
  trigger: {
    type: String,
    default: "hover"
  },
  chooseAfterHide: {
    type: Boolean,
    default: true
  },
  button: Boolean,
  size: String,
  buttonType: String,
  buttonIcon: {
    type: String,
    default: "cu-icon-down"
  }
};
const dropdownEmits = {
  ["menu-click"]: (value) => ["string", "undefined"].includes(typeof value),
  ["button-click"]: (evt) => evt instanceof MouseEvent
};
export {
  dropdownEmits,
  dropdownProps
};
