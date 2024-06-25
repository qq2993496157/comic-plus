"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.tipEmits = tipEmits;
exports.tipProps = tipProps;
