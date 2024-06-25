"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const timePickerProps = {
  modelValue: {
    type: [String, Array],
    required: true
  },
  rangeSeparator: {
    type: String,
    default: "/"
  },
  icon: {
    type: String,
    default: "cu-icon-time"
  },
  size: String,
  range: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  disabled: Boolean,
  clearable: Boolean
};
const isValidValue = (value) => typescript.isString(value) || Array.isArray(value) && value.every((val) => typescript.isString(val));
const timePickerEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
exports.timePickerEmits = timePickerEmits;
exports.timePickerProps = timePickerProps;
