const spaceProps = {
  wrap: Boolean,
  size: {
    type: [Number, String],
    default: "default"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  split: [String, Object],
  align: {
    type: String,
    default: "center"
  },
  fill: Boolean,
  fillRatio: {
    type: Number,
    default: 100
  }
};
export {
  spaceProps
};
