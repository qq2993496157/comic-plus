"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const radioGroupProps = {
  modelValue: [String, Number],
  size: String
};
const radioGroupEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  change: (val) => ["string", "number"].includes(typeof val)
};
exports.radioGroupEmits = radioGroupEmits;
exports.radioGroupProps = radioGroupProps;
