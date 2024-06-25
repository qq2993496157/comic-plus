import { defineComponent, provide, h } from "vue";
import "../style/button.css";
import { buttonGroupProps } from "./main.props.mjs";
import { BUTTONGROUP_PROVIDE } from "./type.mjs";
const ButtonGroup = defineComponent({
  name: "CuButtonGroup",
  props: buttonGroupProps,
  setup(props, { slots }) {
    provide(BUTTONGROUP_PROVIDE, {
      props
    });
    return () => h("span", { class: ["cu-button-group", { "is-round": props.round }] }, slots);
  }
});
export {
  ButtonGroup as default
};
