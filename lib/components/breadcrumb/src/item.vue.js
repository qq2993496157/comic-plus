"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const item_props = require("./item.props.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-breadcrumb-item" };
const _hoisted_2 = {
  key: 0,
  class: "cu-breadcrumb__separator"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuBreadcrumbItem"
  },
  __name: "item",
  props: item_props.breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = vue.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const { props: injectProps } = vue.inject(type.BREADCRUMB_PROVIDE);
    function itemHandleClick() {
      if (!props.to)
        return;
      router == null ? void 0 : router.push(props.to);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["cu-breadcrumb__text", [{ link: _ctx.to }, { active: _ctx.active }]]),
          onClick: _cache[0] || (_cache[0] = ($event) => itemHandleClick())
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        !vue.unref(injectProps).fill ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(vue.unref(injectProps).separatorIcon)
          }, vue.toDisplayString(vue.unref(injectProps).separatorIcon ? void 0 : vue.unref(injectProps).separator), 3)
        ])) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
exports.default = _sfc_main;
