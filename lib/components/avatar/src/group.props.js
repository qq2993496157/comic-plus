"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const avatarGroupProps = {
  fit: {
    type: String,
    default: "cover"
  },
  size: {
    type: Number,
    default: 40
  },
  shape: {
    type: String,
    default: "circle"
  },
  layout: {
    type: String,
    default: "stack"
  },
  offset: Number,
  shadow: Boolean,
  count: Number,
  clickShowAll: {
    type: Boolean,
    default: true
  }
};
const avatarGroupEmits = {
  "change-show": (show) => typescript.isBoolean(show)
};
exports.avatarGroupEmits = avatarGroupEmits;
exports.avatarGroupProps = avatarGroupProps;
