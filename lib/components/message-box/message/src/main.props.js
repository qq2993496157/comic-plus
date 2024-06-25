"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const messageOptions = {
  type: String,
  content: [String, Object],
  icon: String,
  color: String,
  showClose: Boolean,
  duration: {
    type: Number,
    default: 3e3
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  isVNode: Boolean
};
const messageProps = {
  ...messageOptions,
  id: String,
  close: Function,
  destroy: Function
};
exports.messageProps = messageProps;
