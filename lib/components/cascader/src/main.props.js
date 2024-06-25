"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const cascaderProps = {
  modelValue: {
    type: Array,
    default: []
  },
  options: {
    type: Array,
    default: []
  },
  size: String,
  disabled: Boolean,
  clearable: Boolean,
  arbitrarily: Boolean,
  placeholder: String,
  prop: {
    type: Object,
    default: () => {
      return {
        children: "children",
        label: "label",
        value: "value",
        separator: "/"
      };
    }
  }
};
const cascaderEmits = {
  ["update:modelValue"]: (val) => Array.isArray(val),
  change: (val) => Array.isArray(val),
  clear: () => true
};
exports.cascaderEmits = cascaderEmits;
exports.cascaderProps = cascaderProps;
