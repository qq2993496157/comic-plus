"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const radioProps = {
  modelValue: [String, Number],
  label: String,
  value: [String, Number],
  disabled: Boolean,
  activeColor: String,
  size: String
};
const radioEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  change: (value) => typescript.isBoolean(value)
};
exports.radioEmits = radioEmits;
exports.radioProps = radioProps;
