"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const listProps = {
  time: String
};
const listEmits = {
  change: (value) => typescript.isString(value)
};
exports.listEmits = listEmits;
exports.listProps = listProps;
