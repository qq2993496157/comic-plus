"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const dateTableProps = {
  date: [Date, String, Number],
  flagTime: Number
};
const dateTableEmits = {
  change: (value) => typescript.isNumber(value)
};
exports.dateTableEmits = dateTableEmits;
exports.dateTableProps = dateTableProps;
