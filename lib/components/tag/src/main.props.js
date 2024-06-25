"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tagProps = {
  type: String,
  mode: String,
  border: Boolean,
  size: {
    type: Number,
    default: 22
  },
  closable: Boolean,
  transition: Boolean,
  color: String
};
const tagEmits = {
  close: () => true
};
exports.tagEmits = tagEmits;
exports.tagProps = tagProps;
