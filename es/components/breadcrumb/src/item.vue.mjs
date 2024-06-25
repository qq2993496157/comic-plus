import { defineComponent, getCurrentInstance, inject, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, unref, toDisplayString, createCommentVNode } from "vue";
import { breadcrumbItemProps } from "./item.props.mjs";
import { BREADCRUMB_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-breadcrumb-item" };
const _hoisted_2 = {
  key: 0,
  class: "cu-breadcrumb__separator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuBreadcrumbItem"
  },
  __name: "item",
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const { props: injectProps } = inject(BREADCRUMB_PROVIDE);
    function itemHandleClick() {
      if (!props.to)
        return;
      router == null ? void 0 : router.push(props.to);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("span", {
          class: normalizeClass(["cu-breadcrumb__text", [{ link: _ctx.to }, { active: _ctx.active }]]),
          onClick: _cache[0] || (_cache[0] = ($event) => itemHandleClick())
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        !unref(injectProps).fill ? (openBlock(), createElementBlock("span", _hoisted_2, [
          createElementVNode("i", {
            class: normalizeClass(unref(injectProps).separatorIcon)
          }, toDisplayString(unref(injectProps).separatorIcon ? void 0 : unref(injectProps).separator), 3)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
