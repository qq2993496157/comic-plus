import "vue";
import { isBoolean } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const radioProps = {
  modelValue: [String, Number],
  label: String,
  value: [String, Number],
  disabled: Boolean,
  activeColor: String,
  size: String
};
const radioEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  change: (value) => isBoolean(value)
};
export {
  radioEmits,
  radioProps
};
