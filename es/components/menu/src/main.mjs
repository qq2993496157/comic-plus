import { defineComponent, computed, provide, h } from "vue";
import "../style/menu.css";
import { menuProps, menuEmits } from "./main.props.mjs";
import { MENU_PROVIDE } from "./type.mjs";
const Menu = defineComponent({
  name: "CuMenu",
  setup(props, { slots, emit }) {
    function menuClick(name) {
      emit("menu-click", name);
      emit("update:modelValue", name);
    }
    const style = computed(() => {
      return {
        "--cu-menu-active-background": props.activeBackgroundColor,
        "--cu-menu-active-text": props.activeTextColor,
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        "--cu-menu-base-height": props.size + "px"
      };
    });
    provide(MENU_PROVIDE, {
      props,
      menuClick,
      style
    });
    return () => h(
      "ul",
      {
        class: [
          "cu-menu",
          props.mode ? "is-" + props.mode : void 0,
          { "menu-collapse": props.mode === "vertical" && props.collapse }
        ],
        style: style.value
      },
      slots
    );
  },
  props: menuProps,
  emit: menuEmits
});
export {
  Menu
};
