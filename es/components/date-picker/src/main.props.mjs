import "vue";
import { isString, isNumber, isArray } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const datePickerProps = {
  modelValue: {
    type: [Date, String, Number, Array],
    required: true
  },
  format: {
    type: String,
    default: "yyyy-MM-dd"
  },
  valueFormat: {
    type: String,
    default: "date"
  },
  rangeSeparator: {
    type: String,
    default: "/"
  },
  size: String,
  range: Boolean,
  icon: {
    type: String,
    default: "cu-icon-calendar"
  },
  shortcuts: Array,
  disabled: Boolean,
  placeholder: String,
  clearable: Boolean,
  startPlaceholder: String,
  endPlaceholder: String,
  disabledDate: Function
};
const isValidValue = (value) => isString(value) || isNumber(value) || value instanceof Date || isArray(value) && value.every((val) => isString(val) || isNumber(val) || val instanceof Date);
const datePickerEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
export {
  datePickerEmits,
  datePickerProps
};
