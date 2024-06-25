import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
import { stepItemProps } from "./item.props.mjs";
import { useStepItem } from "./use-item.mjs";
const _hoisted_1 = { class: "cu-step-card__header" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuStepCard"
  },
  __name: "card",
  props: stepItemProps,
  setup(__props) {
    const props = __props;
    const { isFinish, isCurrent, currentIcon, injectProps } = useStepItem(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-step-card", { "is-finish": unref(isFinish), "is-active": unref(isCurrent) && !_ctx.error, error: _ctx.error }])
      }, [
        createElementVNode("div", _hoisted_1, [
          unref(currentIcon) ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([unref(currentIcon), "cu-step-item__icon"])
          }, null, 2)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ])
        ]),
        createElementVNode("i", {
          class: normalizeClass([unref(injectProps).direction === "vertical" ? "cu-icon-double-down" : "cu-icon-double-right", "card-bridge"])
        }, null, 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
