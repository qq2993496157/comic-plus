"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const colorPickerProps = {
  modelValue: String,
  alpha: Boolean,
  format: String,
  size: String,
  disabled: Boolean,
  predefine: Array
};
const colorPickerEmits = {
  ["update:modelValue"]: (value) => typescript.isString(value),
  change: (value) => typescript.isString(value)
};
exports.colorPickerEmits = colorPickerEmits;
exports.colorPickerProps = colorPickerProps;
