import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const textareaProps = {
  modelValue: String,
  placeholder: String,
  maxlength: Number,
  autoFocus: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  autoHeight: Boolean
};
const textareaEmits = {
  ["update:modelValue"]: (value) => isString(value),
  change: (value) => isString(value),
  blur: (evt) => evt instanceof FocusEvent,
  focus: (evt) => evt instanceof FocusEvent
};
export {
  textareaEmits,
  textareaProps
};
