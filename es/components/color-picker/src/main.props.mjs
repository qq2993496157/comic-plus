import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const colorPickerProps = {
  modelValue: String,
  alpha: Boolean,
  format: String,
  size: String,
  disabled: Boolean,
  predefine: Array
};
const colorPickerEmits = {
  ["update:modelValue"]: (value) => isString(value),
  change: (value) => isString(value)
};
export {
  colorPickerEmits,
  colorPickerProps
};
