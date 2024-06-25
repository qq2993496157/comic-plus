"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const linkProps = {
  href: String,
  type: String,
  disabled: Boolean,
  underline: Boolean,
  target: {
    type: String,
    default: "_blank"
  }
};
const linkEmits = {
  click: (evt, href) => evt instanceof MouseEvent
};
exports.linkEmits = linkEmits;
exports.linkProps = linkProps;
