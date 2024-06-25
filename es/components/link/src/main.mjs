import { defineComponent, h } from "vue";
import "../style/link.css";
import { linkProps, linkEmits } from "./main.props.mjs";
const Link = defineComponent({
  name: "CuLink",
  props: linkProps,
  emits: linkEmits,
  setup(props, { slots, emit }) {
    function handleClick(e) {
      if (props.disabled)
        return;
      emit("click", e, props.href);
    }
    return () => {
      return h(
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
export {
  Link as default
};
