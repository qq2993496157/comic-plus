"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
require("../style/menu.css");
const main_props = require("./main.props.js");
const type = require("./type.js");
const Menu = vue.defineComponent({
  name: "CuMenu",
  setup(props, { slots, emit }) {
    function menuClick(name) {
      emit("menu-click", name);
      emit("update:modelValue", name);
    }
    const style = vue.computed(() => {
      return {
        "--cu-menu-active-background": props.activeBackgroundColor,
        "--cu-menu-active-text": props.activeTextColor,
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        "--cu-menu-base-height": props.size + "px"
      };
    });
    vue.provide(type.MENU_PROVIDE, {
      props,
      menuClick,
      style
    });
    return () => vue.h(
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
  props: main_props.menuProps,
  emit: main_props.menuEmits
});
exports.Menu = Menu;
