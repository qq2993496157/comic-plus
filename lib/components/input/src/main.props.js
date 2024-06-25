"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const inputProps = {
  modelValue: [String, Number],
  size: String,
  prefixIcon: String,
  suffixIcon: String,
  clearable: Boolean,
  placeholder: String,
  type: String,
  disabled: Boolean
};
const inputEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  change: (val) => ["string", "number"].includes(typeof val),
  input: (val) => ["string", "number"].includes(typeof val),
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  focus: (evt) => evt instanceof FocusEvent
};
exports.inputEmits = inputEmits;
exports.inputProps = inputProps;
