import { defineComponent, h } from "vue";
const OptionGroup = defineComponent({
  name: "CuOptionGroup",
  props: { label: String, icon: String },
  setup(props, { slots }) {
    return () => {
      return h("ul", { class: "cu-option-group" }, [
        h(
          "li",
          { class: "cu-option-group__label" },
          slots.label ? slots.label() : [props.icon && h("i", { class: [props.icon, "icon"] }), props.label]
        ),
        slots.default()
      ]);
    };
  }
});
export {
  OptionGroup as default
};
