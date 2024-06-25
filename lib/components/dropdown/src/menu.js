"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/dropdown.css");
const DropdownMenu = vue.defineComponent({
  name: "CuDropdownMenu",
  setup(_, { slots }) {
    return () => {
      return vue.h("ul", { class: "cu-dropdown-menu" }, slots);
    };
  }
});
exports.default = DropdownMenu;
