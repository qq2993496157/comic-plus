"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tabsProps = {
  modelValue: [String, Number],
  type: {
    type: String,
    default: "line"
  },
  color: String,
  onlyTab: Boolean,
  closable: Boolean
};
const isValidValue = (value) => ["string", "number"].includes(typeof value);
const tabsEmits = {
  "update:modelValue": isValidValue,
  change: isValidValue,
  "tab-remove": isValidValue
};
exports.tabsEmits = tabsEmits;
exports.tabsProps = tabsProps;
