"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const ListItem = vue.defineComponent({
  name: "CuListItem",
  setup(_, { slots }) {
    return () => {
      return vue.h("li", { class: "cu-list-item" }, [
        vue.h("div", { class: "cu-list-item__container" }, slots.default()),
        slots.extra && vue.h("div", { class: "extra" }, slots.extra())
      ]);
    };
  }
});
exports.default = ListItem;
