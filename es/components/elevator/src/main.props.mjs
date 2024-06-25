import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const elevatorProps = {
  height: {
    type: String,
    default: "100%"
  },
  offset: {
    type: Number,
    default: 0
  },
  postion: {
    type: String,
    default: "right-bottom"
  },
  hasMenu: {
    type: Boolean,
    default: true
  },
  menuSize: {
    type: String,
    default: "40px"
  },
  fold: {
    type: Boolean,
    default: true
  },
  scrollbarDisplay: {
    type: String,
    default: "always"
  }
};
const elevatorEmits = {
  change: (value) => isString(value)
};
export {
  elevatorEmits,
  elevatorProps
};
