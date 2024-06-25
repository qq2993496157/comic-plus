const tagComplexProps = {
  type: String,
  size: {
    type: Number,
    default: 20
  },
  closable: Boolean,
  transition: Boolean,
  color: String,
  title: String
};
const tagComplexEmits = {
  close: () => true
};
export {
  tagComplexEmits,
  tagComplexProps
};
