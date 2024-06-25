"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/popper.css");
const config = require("../../../utils/config.js");
const scrollSever = require("../../../utils/scroll-sever.js");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-poper__arrow"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuPopper"
  },
  __name: "main",
  props: main_props.popperProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const instance = vue.getCurrentInstance();
    const zIndex = vue.ref(0);
    const style = vue.reactive({});
    const innerClass = vue.ref("top");
    const popperInner = vue.ref(null);
    const parent = vue.ref();
    vue.watch(
      () => props.show,
      (val, old) => {
        if (!val || val === old)
          return;
        zIndex.value = config.getNextZIndex();
        vue.nextTick(() => {
          setPopperStyle();
        });
      }
    );
    function setPopperStyle() {
      if (!parent.value)
        return;
      let parentRect = parent.value.getBoundingClientRect();
      let diffw = (parentRect == null ? void 0 : parentRect.left) + popperInner.value.offsetWidth - document.documentElement.clientWidth;
      if (diffw > 0) {
        style.left = parentRect.left - diffw - 10;
      } else {
        style.left = parentRect.left;
        if (props.center) {
          style.left = parentRect.left + parentRect.width / 2 - popperInner.value.offsetWidth / 2;
        }
      }
      if (parentRect.top + parentRect.height + popperInner.value.offsetHeight > document.documentElement.clientHeight) {
        style.bottom = document.documentElement.clientHeight + parentRect.height - parentRect.bottom + "px";
        style.top = "auto";
        innerClass.value = "bottom";
      } else {
        style.top = parentRect.top + parentRect.height + "px";
        style.bottom = "auto";
        innerClass.value = "top";
      }
      style.zIndex = zIndex.value;
      if (!props.hideArrow) {
        if (props.center) {
          let l = parentRect.left + parentRect.width / 2 - style.left;
          if (popperInner.value.offsetWidth < parentRect.width) {
            l = Math.min(l, popperInner.value.offsetWidth / 2);
          }
          style["--cu-popper-arrow-left"] = l + "px";
        } else {
          style["--cu-popper-arrow-left"] = "25px";
        }
      }
      style.left = Math.max(style.left, 10) + "px";
    }
    function setPostion() {
      if (!parent.value || !props.show)
        return;
      let parentRect = parent.value.getBoundingClientRect();
      if (parentRect.top + parentRect.height + popperInner.value.offsetHeight > document.documentElement.clientHeight) {
        style.top = "auto";
        style.bottom = document.documentElement.clientHeight + parentRect.height - parentRect.bottom + "px";
        innerClass.value = "bottom";
      } else {
        style.top = parentRect.top + parentRect.height + "px";
        style.bottom = "auto";
        innerClass.value = "top";
      }
    }
    vue.onMounted(() => {
      var _a;
      parent.value = (_a = instance.parent) == null ? void 0 : _a.vnode.el;
      if (parent.value) {
        scrollSever.useScrollSever(parent.value, () => {
          setPostion();
        });
      }
    });
    __expose({ popperInner });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.createVNode(vue.Transition, {
          name: "popper",
          onAfterLeave: _cache[0] || (_cache[0] = () => style["zIndex"] = void 0)
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              style: vue.normalizeStyle(style),
              class: vue.normalizeClass(["cu-popper", [innerClass.value, { "is-hide-arrow": _ctx.hideArrow }]]),
              ref_key: "popperInner",
              ref: popperInner
            }, [
              !_ctx.hideArrow ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1)) : vue.createCommentVNode("", true),
              vue.renderSlot(_ctx.$slots, "default")
            ], 6), [
              [vue.vShow, _ctx.show]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
exports.default = _sfc_main;
