import { defineComponent, h } from "vue";
import { cardGroupProps } from "./group.props.mjs";
import "../style/card.css";
const CardGroup = defineComponent({
  name: "CuCardGroup",
  setup(props, { slots }) {
    return () => h("span", { class: ["cu-card-group", props.cardHoverEffect] }, slots);
  },
  props: cardGroupProps
});
export {
  CardGroup as default
};
