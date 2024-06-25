"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ellipsisProps = {
  data: Array,
  text: String,
  type: {
    type: String,
    default: "text"
  },
  openText: {
    type: String,
    default: "展开"
  },
  closeText: {
    type: String,
    default: "收起"
  },
  clamp: {
    type: Number,
    default: 2
  }
};
exports.ellipsisProps = ellipsisProps;
