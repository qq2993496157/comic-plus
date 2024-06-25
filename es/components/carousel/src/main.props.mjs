import "vue";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const carouselProps = {
  height: {
    type: String,
    default: "300px"
  },
  mode: {
    type: String,
    default: "transform"
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  arrow: {
    type: String,
    default: "hover"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  defaultIndex: Number,
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 3e3,
    validator: (value) => value > 0
  }
};
const carouselEmits = {
  change: (value) => isNumber(value)
};
export {
  carouselEmits,
  carouselProps
};
