"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const datePickerProps = {
  modelValue: {
    type: [Date, String, Number, Array],
    required: true
  },
  format: {
    type: String,
    default: "yyyy-MM-dd"
  },
  valueFormat: {
    type: String,
    default: "date"
  },
  rangeSeparator: {
    type: String,
    default: "/"
  },
  size: String,
  range: Boolean,
  icon: {
    type: String,
    default: "cu-icon-calendar"
  },
  shortcuts: Array,
  disabled: Boolean,
  placeholder: String,
  clearable: Boolean,
  startPlaceholder: String,
  endPlaceholder: String,
  disabledDate: Function
};
const isValidValue = (value) => typescript.isString(value) || typescript.isNumber(value) || value instanceof Date || typescript.isArray(value) && value.every((val) => typescript.isString(val) || typescript.isNumber(val) || val instanceof Date);
const datePickerEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
exports.datePickerEmits = datePickerEmits;
exports.datePickerProps = datePickerProps;
