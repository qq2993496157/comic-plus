const scrollbarProps = {
  height: String,
  display: {
    type: String,
    default: "hover"
  },
  maxHeight: String
};
const scrollbarEmits = {
  scroll: (evt) => evt instanceof Event
};
export {
  scrollbarEmits,
  scrollbarProps
};
