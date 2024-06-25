import { defineComponent, ref, watch, computed, provide, onBeforeMount, h } from "vue";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import "../style/step.css";
import { stepProps } from "./main.props.mjs";
import { STEP_PROVIDE } from "./type.mjs";
const Step = defineComponent({
  name: "CuStep",
  props: stepProps,
  setup(props, { slots }) {
    const step = ref();
    const itemList = ref([]);
    function addItem(uid) {
      itemList.value.push(uid);
    }
    function removeItem(uid) {
      itemList.value.splice(
        itemList.value.findIndex((id) => id === uid),
        1
      );
    }
    watch(
      () => props.active,
      (val) => {
        if (step.value && isNumber(val)) {
          let child = Array.from(step.value.children)[val];
          child == null ? void 0 : child.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        }
      }
    );
    const maxWidth = computed(() => {
      return 100 / itemList.value.length;
    });
    provide(STEP_PROVIDE, {
      addItem,
      removeItem,
      props,
      itemList,
      maxWidth
    });
    onBeforeMount(() => {
      itemList.value = [];
    });
    return () => {
      return h(
        "div",
        {
          class: ["cu-step", props.direction ? "is-" + props.direction : void 0],
          style: { "--cu-step-active-color": props.activeColor }
        },
        slots
      );
    };
  }
});
export {
  Step as default
};
