"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const sliderProps = {
  modelValue: {
    type: [Number, Array],
    required: true
  },
  type: String,
  color: String,
  range: Boolean,
  max: {
    type: Number,
    default: 100,
    validator(value) {
      return value >= 1;
    }
  },
  min: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0;
    }
  },
  step: {
    type: Number,
    default: () => {
      return 0;
    }
  },
  showStep: Boolean,
  disabled: Boolean
};
const isValidValue = (value) => typescript.isNumber(value) || typescript.isArray(value) && value.every(typescript.isNumber);
const sliderEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  input: isValidValue
};
exports.sliderEmits = sliderEmits;
exports.sliderProps = sliderProps;
