import { defineComponent, inject, watch, nextTick, onMounted, onBeforeUnmount, h } from "vue";
import { tabPaneProps } from "./pane.props.mjs";
import { TABS_PROVIDE } from "./type.mjs";
const TabPane = defineComponent({
  name: "CuTabPane",
  props: tabPaneProps,
  setup(props, { slots }) {
    const { props: injectProps, addTab, removeTab } = inject(TABS_PROVIDE);
    watch(
      () => props.name,
      (_, old) => {
        removeTab(old);
        nextTick(() => {
          var _a;
          addTab({
            ...props,
            slots: (_a = slots["label"]) == null ? void 0 : _a.call(slots)
          });
        });
      }
    );
    onMounted(() => {
      var _a;
      addTab({
        ...props,
        slots: (_a = slots["label"]) == null ? void 0 : _a.call(slots)
      });
    });
    onBeforeUnmount(() => {
      removeTab(props.name);
    });
    return () => {
      var _a;
      return injectProps.onlyTab ? null : h(
        "span",
        {
          class: "cu-tabs-pane",
          "tab-index": props.name,
          style: {
            display: injectProps.modelValue === props.name ? void 0 : "none"
          }
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});
export {
  TabPane as default
};
