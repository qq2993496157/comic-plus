"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const menuProps = {
  modelValue: String,
  mode: {
    type: String,
    default: "vertical"
  },
  size: {
    type: Number,
    default: 40
  },
  backgroundColor: String,
  activeTextColor: String,
  activeBackgroundColor: String,
  textColor: String,
  collapse: Boolean
};
const menuEmits = {
  ["update:modelValue"]: (value) => typescript.isString(value),
  ["menu-click"]: (value) => typescript.isString(value)
};
exports.menuEmits = menuEmits;
exports.menuProps = menuProps;
