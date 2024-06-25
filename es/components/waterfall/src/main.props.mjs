const waterfallProps = {
  col: {
    type: Number,
    default: 4
  },
  gutter: {
    type: Number,
    default: 10
  },
  itemWidth: Number
};
const waterfallEmits = {
  update: () => true
};
export {
  waterfallEmits,
  waterfallProps
};
