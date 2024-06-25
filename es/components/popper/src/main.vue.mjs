import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, onMounted, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, normalizeClass, createElementBlock, createCommentVNode, renderSlot, vShow } from "vue";
import "../style/popper.css";
import { getNextZIndex } from "../../../utils/config.mjs";
import { useScrollSever } from "../../../utils/scroll-sever.mjs";
import { popperProps } from "./main.props.mjs";
const _hoisted_1 = {
  key: 0,
  class: "cu-poper__arrow"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuPopper"
  },
  __name: "main",
  props: popperProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const zIndex = ref(0);
    const style = reactive({});
    const innerClass = ref("top");
    const popperInner = ref(null);
    const parent = ref();
    watch(
      () => props.show,
      (val, old) => {
        if (!val || val === old)
          return;
        zIndex.value = getNextZIndex();
        nextTick(() => {
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
    onMounted(() => {
      var _a;
      parent.value = (_a = instance.parent) == null ? void 0 : _a.vnode.el;
      if (parent.value) {
        useScrollSever(parent.value, () => {
          setPostion();
        });
      }
    });
    __expose({ popperInner });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          name: "popper",
          onAfterLeave: _cache[0] || (_cache[0] = () => style["zIndex"] = void 0)
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              style: normalizeStyle(style),
              class: normalizeClass(["cu-popper", [innerClass.value, { "is-hide-arrow": _ctx.hideArrow }]]),
              ref_key: "popperInner",
              ref: popperInner
            }, [
              !_ctx.hideArrow ? (openBlock(), createElementBlock("span", _hoisted_1)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ], 6), [
              [vShow, _ctx.show]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
