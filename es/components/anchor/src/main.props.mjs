import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const anchorProps = {
  container: {
    type: [String, HTMLElement, Window],
    default: window
  },
  direction: {
    type: String,
    default: "vertical"
  },
  lineWeight: Number,
  showLine: Boolean,
  offset: {
    type: Number,
    default: 0
  },
  size: String,
  color: String,
  duration: {
    type: Number,
    default: 500
  }
};
const anchorEmits = {
  change: (href) => isString(href)
};
export {
  anchorEmits,
  anchorProps
};
