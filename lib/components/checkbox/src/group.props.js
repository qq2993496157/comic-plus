"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const checkboxGroupProps = {
  modelValue: Array,
  size: String
};
const checkboxGroupEmits = {
  ["update:modelValue"]: (val) => Array.isArray(val),
  change: (val) => Array.isArray(val)
};
exports.checkboxGroupEmits = checkboxGroupEmits;
exports.checkboxGroupProps = checkboxGroupProps;
