"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const affixProps = {
  position: {
    type: String,
    default: "top"
  },
  offset: {
    type: Number,
    default: 0
  },
  target: String,
  zIndex: {
    type: Number,
    default: 100
  },
  disabled: Boolean
};
const affixEmits = {
  change: (value) => typescript.isBoolean(value)
};
exports.affixEmits = affixEmits;
exports.affixProps = affixProps;
