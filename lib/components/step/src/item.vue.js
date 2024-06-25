"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const item_props = require("./item.props.js");
const useItem = require("./use-item.js");
const _hoisted_1 = { class: "cu-step-item__header" };
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "cu-step-item__line" }, null, -1);
const _hoisted_3 = { class: "cu-step-item__main" };
const _hoisted_4 = { class: "cu-step-item__title" };
const _hoisted_5 = { class: "cu-step-item__content" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuStepItem"
  },
  __name: "item",
  props: item_props.stepItemProps,
  setup(__props) {
    const props = __props;
    const { instance, itemList, currentIndex, isFinish, isCurrent, currentIcon, maxWidth, injectProps } = useItem.useStepItem(props);
    const style = vue.computed(() => {
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
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-step-item", { "is-finish": vue.unref(isFinish), "is-active": vue.unref(isCurrent) && !_ctx.error, error: _ctx.error, "is-center": vue.unref(injectProps).center }]),
        style: vue.normalizeStyle(style.value)
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([vue.unref(currentIcon), "cu-step-item__text"])
          }, vue.toDisplayString(vue.unref(currentIcon) ? void 0 : vue.unref(currentIndex) + 1), 3),
          _hoisted_2
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          vue.createElementVNode("div", _hoisted_4, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
            ])
          ])
        ])
      ], 6);
    };
  }
});
exports.default = _sfc_main;
