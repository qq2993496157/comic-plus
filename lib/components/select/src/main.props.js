"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const selectProps = {
  modelValue: [String, Number, Array],
  multiple: Boolean,
  size: String,
  disabled: Boolean,
  clearable: Boolean,
  placeholder: String
};
const isValidValue = (value) => ["string", "number"].includes(typeof value) || typescript.isArray(value) && value.every((value2) => ["string", "number"].includes(typeof value2));
const selectEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
exports.selectEmits = selectEmits;
exports.selectProps = selectProps;
