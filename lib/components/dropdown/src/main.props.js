"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.dropdownEmits = dropdownEmits;
exports.dropdownProps = dropdownProps;
