import "vue";
import { isBoolean } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const dialogProps = {
  modelValue: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  modeClose: {
    type: Boolean,
    default: true
  },
  transitionClass: {
    type: String,
    default: "cross-scale"
  },
  header: String,
  width: {
    type: String,
    default: "70%"
  },
  top: {
    type: String,
    default: "15vh"
  },
  color: {
    type: String,
    default: "#ffffff"
  },
  beforeClose: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  appendTo: String,
  appendToBody: Boolean,
  customClass: String,
  modeClass: String
};
const dialogEmits = {
  ["update:modelValue"]: (value) => isBoolean(value),
  close: () => true,
  open: () => true
};
export {
  dialogEmits,
  dialogProps
};
