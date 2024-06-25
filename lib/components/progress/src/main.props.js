"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const STATUS = {
  success: "cu-icon-success",
  warning: "cu-icon-warning",
  fail: "cu-icon-close-one"
};
const progressProps = {
  progress: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: "primary"
  },
  barType: {
    type: String,
    default: "line"
  },
  status: String,
  size: {
    type: [String, Number],
    default: "120"
  },
  barWidth: Number,
  colors: [String, Object, Function],
  insetFormat: Boolean,
  format: String,
  showText: {
    type: Boolean,
    default: true
  }
};
exports.STATUS = STATUS;
exports.progressProps = progressProps;
