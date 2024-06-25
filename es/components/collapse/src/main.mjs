import { defineComponent, ref, provide, h } from "vue";
import "../style/collapse.css";
import { COLLAPSE_PROVIDE } from "./type.mjs";
import { collapseProps, collapseEmits } from "./main.props.mjs";
const Collapse = defineComponent({
  name: "CuCollapse",
  props: collapseProps,
  emits: collapseEmits,
  setup(props, { slots, emit }) {
    const activeValue = ref(props.modelValue);
    function collapseChange(show, name) {
      if (props.accordion) {
        activeValue.value = show ? name : "";
      } else {
        let activeValueArray = activeValue.value;
        if (show) {
          activeValueArray.push(name);
        } else {
          activeValueArray.splice(
            activeValueArray.findIndex((v) => v === name),
            1
          );
        }
      }
      updateValue();
    }
    function updateValue() {
      emit("update:modelValue", activeValue.value);
      emit("change", activeValue.value);
    }
    provide(COLLAPSE_PROVIDE, {
      activeValue,
      props,
      collapseChange
    });
    return () => {
      return h(
        "div",
        {
          class: ["cu-collapse", { fill: props.fill }],
          style: props.fill && props.gap ? `--cu-collapse-gap:${props.gap}px` : void 0
        },
        slots
      );
    };
  }
});
export {
  Collapse as default
};
