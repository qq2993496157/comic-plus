"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const textareaProps = {
  modelValue: String,
  placeholder: String,
  maxlength: Number,
  autoFocus: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  autoHeight: Boolean
};
const textareaEmits = {
  ["update:modelValue"]: (value) => typescript.isString(value),
  change: (value) => typescript.isString(value),
  blur: (evt) => evt instanceof FocusEvent,
  focus: (evt) => evt instanceof FocusEvent
};
exports.textareaEmits = textareaEmits;
exports.textareaProps = textareaProps;
