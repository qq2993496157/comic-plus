import { defineComponent, h } from "vue";
import "../style/dropdown.css";
const DropdownMenu = defineComponent({
  name: "CuDropdownMenu",
  setup(_, { slots }) {
    return () => {
      return h("ul", { class: "cu-dropdown-menu" }, slots);
    };
  }
});
export {
  DropdownMenu as default
};
