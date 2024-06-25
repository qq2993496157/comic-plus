"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/space.css");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const dom = require("../../../utils/dom.js");
const main_props = require("./main.props.js");
const Space = vue.defineComponent({
  name: "CuSpace",
  props: main_props.spaceProps,
  setup(props, { slots }) {
    const sizeStringEnum = {
      small: "8px",
      default: "12px",
      large: "16px"
    };
    const spaceStyle = vue.computed(() => {
      return {
        "align-items": props.align,
        "flex-wrap": props.wrap ? "wrap" : "nowrap",
        gap: typescript.isNumber(props.size) ? props.size + "px" : sizeStringEnum[props.size],
        width: props.fill ? "100%" : void 0
      };
    });
    const itemStyle = vue.computed(() => {
      if (!props.fill)
        return void 0;
      return {
        "flex-grow": 1,
        "min-width": props.fillRatio + "%"
      };
    });
    return () => {
      var _a;
      const items = dom.filterEmpty(((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []);
      const len = items.length;
      if (len === 0)
        return null;
      return vue.h(
        "div",
        { class: ["cu-space", "cu-space--" + props.direction], style: spaceStyle.value },
        items.map((child, index) => {
          const item = vue.h("div", { class: "cu-space-item", style: itemStyle.value }, [child]);
          if (props.split && index + 1 < len) {
            return [item, vue.h("div", { class: "cu-space-split" }, [props.split])];
          }
          return item;
        })
      );
    };
  }
});
exports.default = Space;
