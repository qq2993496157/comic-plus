"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const typescript = require("../../../../utils/typescript.js");
require("../../../../utils/config.js");
const ListAction = vue.defineComponent({
  name: "CuListAction",
  props: {
    actions: Array,
    align: {
      type: String,
      default: "end"
    }
  },
  emits: {
    click: (action) => typescript.isString(action)
  },
  setup(props, { emit }) {
    const alignStyle = {
      left: "flex-start",
      center: "center",
      end: "flex-end"
    };
    const itemClick = (item) => {
      if (typescript.isString(item)) {
        emit("click", item);
      } else {
        emit("click", item.value);
      }
    };
    return () => {
      return vue.h("div", { class: "cu-list-action", style: { "justify-content": alignStyle[props.align] } }, [
        props.actions.map((item) => {
          return vue.h(
            "span",
            { style: item.style, onclick: () => itemClick(item) },
            typescript.isString(item) ? item : item.label ?? item.value
          );
        })
      ]);
    };
  }
});
exports.default = ListAction;
