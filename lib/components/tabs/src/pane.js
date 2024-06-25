"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const pane_props = require("./pane.props.js");
const type = require("./type.js");
const TabPane = vue.defineComponent({
  name: "CuTabPane",
  props: pane_props.tabPaneProps,
  setup(props, { slots }) {
    const { props: injectProps, addTab, removeTab } = vue.inject(type.TABS_PROVIDE);
    vue.watch(
      () => props.name,
      (_, old) => {
        removeTab(old);
        vue.nextTick(() => {
          var _a;
          addTab({
            ...props,
            slots: (_a = slots["label"]) == null ? void 0 : _a.call(slots)
          });
        });
      }
    );
    vue.onMounted(() => {
      var _a;
      addTab({
        ...props,
        slots: (_a = slots["label"]) == null ? void 0 : _a.call(slots)
      });
    });
    vue.onBeforeUnmount(() => {
      removeTab(props.name);
    });
    return () => {
      var _a;
      return injectProps.onlyTab ? null : vue.h(
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
exports.default = TabPane;
