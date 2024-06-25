"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const anchorProps = {
  container: {
    type: [String, HTMLElement, Window],
    default: window
  },
  direction: {
    type: String,
    default: "vertical"
  },
  lineWeight: Number,
  showLine: Boolean,
  offset: {
    type: Number,
    default: 0
  },
  size: String,
  color: String,
  duration: {
    type: Number,
    default: 500
  }
};
const anchorEmits = {
  change: (href) => typescript.isString(href)
};
exports.anchorEmits = anchorEmits;
exports.anchorProps = anchorProps;
