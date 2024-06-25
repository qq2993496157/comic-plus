"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const ElevatorItem = vue.defineComponent({
  name: "CuElevatorItem",
  props: {
    name: String,
    label: String
  },
  setup(props, { slots }) {
    const instance = vue.getCurrentInstance();
    const { setItem, removeItem } = vue.inject(type.ELEVATOR_PROVIDE);
    vue.onMounted(() => {
      setItem({ name: props.name, label: props.label, uid: instance.uid });
    });
    vue.onBeforeUnmount(() => {
      removeItem(instance.uid);
    });
    return () => {
      return vue.h("div", { class: "cu-elevator-item", "elevator-name": props.name }, slots);
    };
  }
});
exports.default = ElevatorItem;
