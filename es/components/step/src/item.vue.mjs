import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, toDisplayString, renderSlot, createTextVNode } from "vue";
import { stepItemProps } from "./item.props.mjs";
import { useStepItem } from "./use-item.mjs";
const _hoisted_1 = { class: "cu-step-item__header" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("span", { class: "cu-step-item__line" }, null, -1);
const _hoisted_3 = { class: "cu-step-item__main" };
const _hoisted_4 = { class: "cu-step-item__title" };
const _hoisted_5 = { class: "cu-step-item__content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuStepItem"
  },
  __name: "item",
  props: stepItemProps,
  setup(__props) {
    const props = __props;
    const { instance, itemList, currentIndex, isFinish, isCurrent, currentIcon, maxWidth, injectProps } = useStepItem(props);
    const style = computed(() => {
      if (injectProps.direction === "vertical") {
        if (instance.uid === itemList.value[itemList.value.length - 1])
          return void 0;
        return {
          flexBasis: 100 / (itemList.value.length - 1) + "%"
        };
      } else if (injectProps.center) {
        return {
          flexBasis: 100 / itemList.value.length + "%"
        };
      } else if (instance.uid === itemList.value[itemList.value.length - 1]) {
        return {
          maxWidth: maxWidth.value + "%"
        };
      } else {
        return {
          flexBasis: 100 / (itemList.value.length - 1) + "%"
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-step-item", { "is-finish": unref(isFinish), "is-active": unref(isCurrent) && !_ctx.error, error: _ctx.error, "is-center": unref(injectProps).center }]),
        style: normalizeStyle(style.value)
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("span", {
            class: normalizeClass([unref(currentIcon), "cu-step-item__text"])
          }, toDisplayString(unref(currentIcon) ? void 0 : unref(currentIndex) + 1), 3),
          _hoisted_2
        ]),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ]),
          createElementVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.content), 1)
            ])
          ])
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
