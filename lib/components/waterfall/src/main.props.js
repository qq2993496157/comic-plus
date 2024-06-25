"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const waterfallProps = {
  col: {
    type: Number,
    default: 4
  },
  gutter: {
    type: Number,
    default: 10
  },
  itemWidth: Number
};
const waterfallEmits = {
  update: () => true
};
exports.waterfallEmits = waterfallEmits;
exports.waterfallProps = waterfallProps;
