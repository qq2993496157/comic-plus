import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const menuProps = {
  modelValue: String,
  mode: {
    type: String,
    default: "vertical"
  },
  size: {
    type: Number,
    default: 40
  },
  backgroundColor: String,
  activeTextColor: String,
  activeBackgroundColor: String,
  textColor: String,
  collapse: Boolean
};
const menuEmits = {
  ["update:modelValue"]: (value) => isString(value),
  ["menu-click"]: (value) => isString(value)
};
export {
  menuEmits,
  menuProps
};
