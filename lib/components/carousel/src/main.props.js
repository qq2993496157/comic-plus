"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const carouselProps = {
  height: {
    type: String,
    default: "300px"
  },
  mode: {
    type: String,
    default: "transform"
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  arrow: {
    type: String,
    default: "hover"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  defaultIndex: Number,
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 3e3,
    validator: (value) => value > 0
  }
};
const carouselEmits = {
  change: (value) => typescript.isNumber(value)
};
exports.carouselEmits = carouselEmits;
exports.carouselProps = carouselProps;
