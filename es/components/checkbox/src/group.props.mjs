const checkboxGroupProps = {
  modelValue: Array,
  size: String
};
const checkboxGroupEmits = {
  ["update:modelValue"]: (val) => Array.isArray(val),
  change: (val) => Array.isArray(val)
};
export {
  checkboxGroupEmits,
  checkboxGroupProps
};
