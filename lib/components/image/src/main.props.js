"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const imageProps = {
  src: String,
  alt: String,
  fit: String,
  current: Number,
  loading: {
    type: String,
    default: "eager"
  },
  previewList: Array
};
const imageEmits = {
  load: () => true,
  error: () => true
};
exports.imageEmits = imageEmits;
exports.imageProps = imageProps;
