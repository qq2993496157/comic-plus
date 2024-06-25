const countdownProps = {
  value: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  prefix: String,
  suffix: String
};
const countdownEmits = {
  finish: () => true
};
export {
  countdownEmits,
  countdownProps
};
