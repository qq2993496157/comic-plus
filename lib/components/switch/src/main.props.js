"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const switchProps = {
  modelValue: [Boolean, String, Number],
  onText: String,
  offText: String,
  onValue: [String, Number],
  offValue: [String, Number],
  onColor: String,
  offColor: String,
  disabled: Boolean,
  square: Boolean,
  inlineText: Boolean,
  onIcon: String,
  offIcon: String,
  changeBefore: Function,
  loading: Boolean,
  size: String
};
const switchEmits = {
  ["update:modelValue"]: (val) => ["boolean", "string", "number"].includes(typeof val),
  change: (val) => ["boolean", "string", "number"].includes(typeof val)
};
exports.switchEmits = switchEmits;
exports.switchProps = switchProps;
