import "vue";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const inputNumberProps = {
  modelValue: Number,
  size: String,
  min: Number,
  max: Number,
  step: {
    type: Number,
    default: 1
  },
  disabled: Boolean
};
const inputNumberEmits = {
  ["update:modelValue"]: (value) => isNumber(value),
  change: (value) => isNumber(value),
  blur: (evt) => evt instanceof FocusEvent,
  focus: (evt) => evt instanceof FocusEvent
};
export {
  inputNumberEmits,
  inputNumberProps
};
