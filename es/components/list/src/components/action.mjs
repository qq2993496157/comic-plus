import { defineComponent, h } from "vue";
import { isString } from "../../../../utils/typescript.mjs";
import "../../../../utils/config.mjs";
const ListAction = defineComponent({
  name: "CuListAction",
  props: {
    actions: Array,
    align: {
      type: String,
      default: "end"
    }
  },
  emits: {
    click: (action) => isString(action)
  },
  setup(props, { emit }) {
    const alignStyle = {
      left: "flex-start",
      center: "center",
      end: "flex-end"
    };
    const itemClick = (item) => {
      if (isString(item)) {
        emit("click", item);
      } else {
        emit("click", item.value);
      }
    };
    return () => {
      return h("div", { class: "cu-list-action", style: { "justify-content": alignStyle[props.align] } }, [
        props.actions.map((item) => {
          return h(
            "span",
            { style: item.style, onclick: () => itemClick(item) },
            isString(item) ? item : item.label ?? item.value
          );
        })
      ]);
    };
  }
});
export {
  ListAction as default
};
