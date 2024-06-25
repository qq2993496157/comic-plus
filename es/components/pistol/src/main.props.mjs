const pistolProps = {
  trigger: {
    type: String,
    default: "hover"
  },
  type: String,
  color: String,
  size: {
    type: Number,
    default: 40
  },
  equal: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: "wheel"
  },
  iteration: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "top"
  },
  icon: String,
  chooseAfterHide: Boolean
};
const pistolEmits = {
  shoot: (sign) => ["string", "undefined"].includes(typeof sign),
  ["trigger-click"]: (evt) => evt instanceof MouseEvent,
  open: () => true,
  close: () => true
};
export {
  pistolEmits,
  pistolProps
};
