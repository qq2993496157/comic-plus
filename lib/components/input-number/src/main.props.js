"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const inputNumberProps = {
  modelValue: Number,
  size: String,
  min: Number,
  max: Number,
  step: {
    type: Number,
    default: 1
  },
  disabled: Boolean
};
const inputNumberEmits = {
  ["update:modelValue"]: (value) => typescript.isNumber(value),
  change: (value) => typescript.isNumber(value),
  blur: (evt) => evt instanceof FocusEvent,
  focus: (evt) => evt instanceof FocusEvent
};
exports.inputNumberEmits = inputNumberEmits;
exports.inputNumberProps = inputNumberProps;
