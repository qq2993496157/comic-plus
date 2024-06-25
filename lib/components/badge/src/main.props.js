"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const badgeProps = {
  value: [Number, String],
  dot: Boolean,
  max: {
    type: Number,
    default: 99
  },
  type: {
    type: String,
    default: "danger"
  },
  color: String,
  zeroShow: Boolean,
  ellipsis: {
    type: Boolean,
    default: true
  },
  offset: [Number, Array]
};
exports.badgeProps = badgeProps;
