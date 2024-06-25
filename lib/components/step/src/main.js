"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
require("../style/step.css");
const main_props = require("./main.props.js");
const type = require("./type.js");
const Step = vue.defineComponent({
  name: "CuStep",
  props: main_props.stepProps,
  setup(props, { slots }) {
    const step = vue.ref();
    const itemList = vue.ref([]);
    function addItem(uid) {
      itemList.value.push(uid);
    }
    function removeItem(uid) {
      itemList.value.splice(
        itemList.value.findIndex((id) => id === uid),
        1
      );
    }
    vue.watch(
      () => props.active,
      (val) => {
        if (step.value && typescript.isNumber(val)) {
          let child = Array.from(step.value.children)[val];
          child == null ? void 0 : child.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        }
      }
    );
    const maxWidth = vue.computed(() => {
      return 100 / itemList.value.length;
    });
    vue.provide(type.STEP_PROVIDE, {
      addItem,
      removeItem,
      props,
      itemList,
      maxWidth
    });
    vue.onBeforeMount(() => {
      itemList.value = [];
    });
    return () => {
      return vue.h(
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
exports.default = Step;
