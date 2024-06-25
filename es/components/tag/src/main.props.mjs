const tagProps = {
  type: String,
  mode: String,
  border: Boolean,
  size: {
    type: Number,
    default: 22
  },
  closable: Boolean,
  transition: Boolean,
  color: String
};
const tagEmits = {
  close: () => true
};
export {
  tagEmits,
  tagProps
};
