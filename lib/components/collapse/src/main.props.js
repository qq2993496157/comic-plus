"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const collapseProps = {
  modelValue: [String, Array],
  accordion: Boolean,
  fill: Boolean,
  color: String,
  background: String,
  gap: {
    type: Number,
    default: 10
  }
};
const isValidValue = (value) => typescript.isString(value) || Array.isArray(value) && value.every((val) => typescript.isString(val));
const collapseEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue
};
exports.collapseEmits = collapseEmits;
exports.collapseProps = collapseProps;
