const radioGroupProps = {
  modelValue: [String, Number],
  size: String
};
const radioGroupEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  change: (val) => ["string", "number"].includes(typeof val)
};
export {
  radioGroupEmits,
  radioGroupProps
};
