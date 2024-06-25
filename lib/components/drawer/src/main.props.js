"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const drawerProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "right"
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  header: String,
  dimension: {
    type: String,
    default: "30%"
  },
  color: String,
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  customClass: String,
  modeClass: String
};
const drawerEmits = {
  ["update:modelValue"]: (value) => typescript.isBoolean(value),
  close: () => true,
  open: () => true
};
exports.drawerEmits = drawerEmits;
exports.drawerProps = drawerProps;
