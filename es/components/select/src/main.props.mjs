import "vue";
import { isArray } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const selectProps = {
  modelValue: [String, Number, Array],
  multiple: Boolean,
  size: String,
  disabled: Boolean,
  clearable: Boolean,
  placeholder: String
};
const isValidValue = (value) => ["string", "number"].includes(typeof value) || isArray(value) && value.every((value2) => ["string", "number"].includes(typeof value2));
const selectEmits = {
  ["update:modelValue"]: isValidValue,
  change: isValidValue,
  clear: () => true
};
export {
  selectEmits,
  selectProps
};
