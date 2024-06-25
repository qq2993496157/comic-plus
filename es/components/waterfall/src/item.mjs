import { defineComponent, h } from "vue";
const WaterfallItem = defineComponent({
  name: "CuWaterfallItem",
  setup(_, { slots }) {
    return () => h("div", { class: "cu-waterfall-item" }, slots);
  }
});
export {
  WaterfallItem as default
};
