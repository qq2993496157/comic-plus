import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const collapseProps = {
  modelValue: [String, Array],
  accordion: Boolean,
  fill: Boolean,
  color: String,
  background: String,
  gap: {
    type: Number,
    default: 10
  }
};
const isValidValue = (value) => isString(value) || Array.isArray(value) && value.every((val) => isString(val));
const collapseEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue
};
export {
  collapseEmits,
  collapseProps
};
