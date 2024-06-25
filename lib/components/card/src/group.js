"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const group_props = require("./group.props.js");
require("../style/card.css");
const CardGroup = vue.defineComponent({
  name: "CuCardGroup",
  setup(props, { slots }) {
    return () => vue.h("span", { class: ["cu-card-group", props.cardHoverEffect] }, slots);
  },
  props: group_props.cardGroupProps
});
exports.default = CardGroup;
