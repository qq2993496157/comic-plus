"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/button.css");
const main_props = require("./main.props.js");
const type = require("./type.js");
const ButtonGroup = vue.defineComponent({
  name: "CuButtonGroup",
  props: main_props.buttonGroupProps,
  setup(props, { slots }) {
    vue.provide(type.BUTTONGROUP_PROVIDE, {
      props
    });
    return () => vue.h("span", { class: ["cu-button-group", { "is-round": props.round }] }, slots);
  }
});
exports.default = ButtonGroup;
