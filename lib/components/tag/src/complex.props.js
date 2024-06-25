"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tagComplexProps = {
  type: String,
  size: {
    type: Number,
    default: 20
  },
  closable: Boolean,
  transition: Boolean,
  color: String,
  title: String
};
const tagComplexEmits = {
  close: () => true
};
exports.tagComplexEmits = tagComplexEmits;
exports.tagComplexProps = tagComplexProps;
