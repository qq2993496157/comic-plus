"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const WaterfallItem = vue.defineComponent({
  name: "CuWaterfallItem",
  setup(_, { slots }) {
    return () => vue.h("div", { class: "cu-waterfall-item" }, slots);
  }
});
exports.default = WaterfallItem;
