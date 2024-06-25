"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const elevatorProps = {
  height: {
    type: String,
    default: "100%"
  },
  offset: {
    type: Number,
    default: 0
  },
  postion: {
    type: String,
    default: "right-bottom"
  },
  hasMenu: {
    type: Boolean,
    default: true
  },
  menuSize: {
    type: String,
    default: "40px"
  },
  fold: {
    type: Boolean,
    default: true
  },
  scrollbarDisplay: {
    type: String,
    default: "always"
  }
};
const elevatorEmits = {
  change: (value) => typescript.isString(value)
};
exports.elevatorEmits = elevatorEmits;
exports.elevatorProps = elevatorProps;
