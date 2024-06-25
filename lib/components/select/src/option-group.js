"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const OptionGroup = vue.defineComponent({
  name: "CuOptionGroup",
  props: { label: String, icon: String },
  setup(props, { slots }) {
    return () => {
      return vue.h("ul", { class: "cu-option-group" }, [
        vue.h(
          "li",
          { class: "cu-option-group__label" },
          slots.label ? slots.label() : [props.icon && vue.h("i", { class: [props.icon, "icon"] }), props.label]
        ),
        slots.default()
      ]);
    };
  }
});
exports.default = OptionGroup;
