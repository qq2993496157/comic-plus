"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const rateProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 5,
    validator: (value) => value >= 5
  },
  size: {
    type: Number,
    default: 20,
    validator: (value) => value >= 12
  },
  allowHalf: Boolean,
  clearable: Boolean,
  showText: Boolean,
  texts: Array,
  icons: {
    type: [String, Array]
  },
  color: {
    type: String,
    default: "#f7ba2a"
  },
  unColor: {
    type: String,
    default: "#999999"
  },
  variableIcon: Function,
  variableColor: Function,
  disabled: Boolean
};
const rateEmits = {
  ["update:modelValue"]: (value) => typescript.isNumber(value),
  change: (value) => typescript.isNumber(value)
};
exports.rateEmits = rateEmits;
exports.rateProps = rateProps;
