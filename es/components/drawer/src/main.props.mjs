import "vue";
import { isBoolean } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const drawerProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "right"
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  header: String,
  dimension: {
    type: String,
    default: "30%"
  },
  color: String,
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  customClass: String,
  modeClass: String
};
const drawerEmits = {
  ["update:modelValue"]: (value) => isBoolean(value),
  close: () => true,
  open: () => true
};
export {
  drawerEmits,
  drawerProps
};
