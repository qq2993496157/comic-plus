import { defineComponent, computed, h } from "vue";
import "../style/space.css";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { filterEmpty } from "../../../utils/dom.mjs";
import { spaceProps } from "./main.props.mjs";
const Space = defineComponent({
  name: "CuSpace",
  props: spaceProps,
  setup(props, { slots }) {
    const sizeStringEnum = {
      small: "8px",
      default: "12px",
      large: "16px"
    };
    const spaceStyle = computed(() => {
      return {
        "align-items": props.align,
        "flex-wrap": props.wrap ? "wrap" : "nowrap",
        gap: isNumber(props.size) ? props.size + "px" : sizeStringEnum[props.size],
        width: props.fill ? "100%" : void 0
      };
    });
    const itemStyle = computed(() => {
      if (!props.fill)
        return void 0;
      return {
        "flex-grow": 1,
        "min-width": props.fillRatio + "%"
      };
    });
    return () => {
      var _a;
      const items = filterEmpty(((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []);
      const len = items.length;
      if (len === 0)
        return null;
      return h(
        "div",
        { class: ["cu-space", "cu-space--" + props.direction], style: spaceStyle.value },
        items.map((child, index) => {
          const item = h("div", { class: "cu-space-item", style: itemStyle.value }, [child]);
          if (props.split && index + 1 < len) {
            return [item, h("div", { class: "cu-space-split" }, [props.split])];
          }
          return item;
        })
      );
    };
  }
});
export {
  Space as default
};
