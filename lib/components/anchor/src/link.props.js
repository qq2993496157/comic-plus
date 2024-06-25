"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const anchorLinkProps = {
  href: {
    type: String,
    required: true
  },
  title: String,
  underline: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 0
  }
};
exports.anchorLinkProps = anchorLinkProps;
