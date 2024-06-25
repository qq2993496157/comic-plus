import "vue";
import { isNumber, isArray } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
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
const isValidValue = (value) => isNumber(value) || isArray(value) && value.every(isNumber);
const sliderEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  input: isValidValue
};
export {
  sliderEmits,
  sliderProps
};
