const zoneProps = {
  modelValue: {
    type: [String, Number],
    default: 0.5
  },
  mode: {
    type: String,
    default: "horizontal"
  },
  lineWeight: {
    type: Number,
    default: 6
  },
  min: {
    type: [String, Number],
    default: "40px"
  },
  max: {
    type: [String, Number],
    default: "40px"
  }
};
const zoneEmits = {
  ["update:modelValue"]: (val) => ["string", "number"].includes(typeof val),
  ["drag-start"]: () => true,
  ["drag"]: (evt) => evt instanceof MouseEvent,
  ["drag-end"]: () => true
};
export {
  zoneEmits,
  zoneProps
};
