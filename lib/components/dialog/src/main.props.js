"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const dialogProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  transitionClass: {
    type: String,
    default: "cross-scale"
  },
  header: String,
  width: {
    type: String,
    default: "70%"
  },
  top: {
    type: String,
    default: "15vh"
  },
  color: {
    type: String,
    default: "#ffffff"
  },
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  appendToBody: Boolean,
  customClass: String,
  modeClass: String
};
const dialogEmits = {
  ["update:modelValue"]: (value) => typescript.isBoolean(value),
  close: () => true,
  open: () => true
};
exports.dialogEmits = dialogEmits;
exports.dialogProps = dialogProps;
