const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: [String, Number],
  falseValue: [String, Number],
  label: String,
  indeterminate: {
    type: Boolean,
    default: () => {
      return null;
    }
  },
  disabled: Boolean,
  color: String,
  size: String
};
const checkboxEmits = {
  ["update:modelValue"]: (evt) => ["boolean", "string", "number"].includes(typeof evt),
  change: (evt) => ["boolean", "string", "number"].includes(typeof evt)
};
export {
  checkboxEmits,
  checkboxProps
};
