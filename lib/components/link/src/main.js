"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/link.css");
const main_props = require("./main.props.js");
const Link = vue.defineComponent({
  name: "CuLink",
  props: main_props.linkProps,
  emits: main_props.linkEmits,
  setup(props, { slots, emit }) {
    function handleClick(e) {
      if (props.disabled)
        return;
      emit("click", e, props.href);
    }
    return () => {
      return vue.h(
        "a",
        {
          class: [
            "cu-link",
            props.type ? "cu-link--" + props.type : void 0,
            { underline: props.underline, "is-disabled": props.disabled }
          ],
          href: props.disabled || !props.href ? void 0 : props.href,
          target: props.target,
          disabled: props.disabled,
          onclick: handleClick
        },
        slots
      );
    };
  }
});
exports.default = Link;
