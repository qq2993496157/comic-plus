"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const POSITION_ENUM = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};
const dividerProps = {
  direction: {
    type: String,
    default: "horizontal"
  },
  type: String,
  color: String,
  lineWeight: {
    type: Number,
    default: 1
  },
  contentPosition: {
    type: String,
    default: "center"
  },
  lineStyle: String
};
exports.POSITION_ENUM = POSITION_ENUM;
exports.dividerProps = dividerProps;
