import { defineComponent, computed, h } from "vue";
import "../style/divider.css";
import { dividerProps, POSITION_ENUM } from "./main.props.mjs";
const Divider = defineComponent({
  name: "CuDivider",
  props: dividerProps,
  setup(props, { slots }) {
    const computedStyle = computed(() => {
      return {
        "--cu-divider-color": props.color,
        "--cu-divider-style": props.lineStyle,
        "--cu-divider-width": props.lineWeight + "px",
        justifyContent: POSITION_ENUM[props.contentPosition]
      };
    });
    return () => {
      return h(
        "span",
        {
          class: ["cu-divider", "cu-divider--" + props.direction, props.type ? "cu-divider--" + props.type : void 0],
          style: computedStyle.value
        },
        slots.default && props.direction === "horizontal" ? h("span", null, slots) : void 0
      );
    };
  }
});
export {
  Divider as default
};
