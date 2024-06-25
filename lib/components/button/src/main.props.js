"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.buttonEmits = buttonEmits;
exports.buttonGroupProps = buttonGroupProps;
exports.buttonProps = buttonProps;
