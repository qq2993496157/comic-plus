"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/collapse.css");
const type = require("./type.js");
const main_props = require("./main.props.js");
const Collapse = vue.defineComponent({
  name: "CuCollapse",
  props: main_props.collapseProps,
  emits: main_props.collapseEmits,
  setup(props, { slots, emit }) {
    const activeValue = vue.ref(props.modelValue);
    function collapseChange(show, name) {
      if (props.accordion) {
        activeValue.value = show ? name : "";
      } else {
        let activeValueArray = activeValue.value;
        if (show) {
          activeValueArray.push(name);
        } else {
          activeValueArray.splice(
            activeValueArray.findIndex((v) => v === name),
            1
          );
        }
      }
      updateValue();
    }
    function updateValue() {
      emit("update:modelValue", activeValue.value);
      emit("change", activeValue.value);
    }
    vue.provide(type.COLLAPSE_PROVIDE, {
      activeValue,
      props,
      collapseChange
    });
    return () => {
      return vue.h(
        "div",
        {
          class: ["cu-collapse", { fill: props.fill }],
          style: props.fill && props.gap ? `--cu-collapse-gap:${props.gap}px` : void 0
        },
        slots
      );
    };
  }
});
exports.default = Collapse;
