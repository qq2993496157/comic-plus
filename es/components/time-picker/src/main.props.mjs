import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const timePickerProps = {
  modelValue: {
    type: [String, Array],
    required: true
  },
  rangeSeparator: {
    type: String,
    default: "/"
  },
  icon: {
    type: String,
    default: "cu-icon-time"
  },
  size: String,
  range: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  disabled: Boolean,
  clearable: Boolean
};
const isValidValue = (value) => isString(value) || Array.isArray(value) && value.every((val) => isString(val));
const timePickerEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
export {
  timePickerEmits,
  timePickerProps
};
