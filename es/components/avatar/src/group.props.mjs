import "vue";
import { isBoolean } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const avatarGroupProps = {
  fit: {
    type: String,
    default: "cover"
  },
  size: {
    type: Number,
    default: 40
  },
  shape: {
    type: String,
    default: "circle"
  },
  layout: {
    type: String,
    default: "stack"
  },
  offset: Number,
  shadow: Boolean,
  count: Number,
  clickShowAll: {
    type: Boolean,
    default: true
  }
};
const avatarGroupEmits = {
  "change-show": (show) => isBoolean(show)
};
export {
  avatarGroupEmits,
  avatarGroupProps
};
