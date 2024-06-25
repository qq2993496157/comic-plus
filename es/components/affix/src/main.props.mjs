import "vue";
import { isBoolean } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const affixProps = {
  position: {
    type: String,
    default: "top"
  },
  offset: {
    type: Number,
    default: 0
  },
  target: String,
  zIndex: {
    type: Number,
    default: 100
  },
  disabled: Boolean
};
const affixEmits = {
  change: (value) => isBoolean(value)
};
export {
  affixEmits,
  affixProps
};
