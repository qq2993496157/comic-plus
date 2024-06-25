"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/divider.css");
const main_props = require("./main.props.js");
const Divider = vue.defineComponent({
  name: "CuDivider",
  props: main_props.dividerProps,
  setup(props, { slots }) {
    const computedStyle = vue.computed(() => {
      return {
        "--cu-divider-color": props.color,
        "--cu-divider-style": props.lineStyle,
        "--cu-divider-width": props.lineWeight + "px",
        justifyContent: main_props.POSITION_ENUM[props.contentPosition]
      };
    });
    return () => {
      return vue.h(
        "span",
        {
          class: ["cu-divider", "cu-divider--" + props.direction, props.type ? "cu-divider--" + props.type : void 0],
          style: computedStyle.value
        },
        slots.default && props.direction === "horizontal" ? vue.h("span", null, slots) : void 0
      );
    };
  }
});
exports.default = Divider;
