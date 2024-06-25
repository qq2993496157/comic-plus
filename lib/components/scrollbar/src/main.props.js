"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const scrollbarProps = {
  height: String,
  display: {
    type: String,
    default: "hover"
  },
  maxHeight: String
};
const scrollbarEmits = {
  scroll: (evt) => evt instanceof Event
};
exports.scrollbarEmits = scrollbarEmits;
exports.scrollbarProps = scrollbarProps;
