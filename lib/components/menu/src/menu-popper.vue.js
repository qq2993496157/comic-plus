"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const config = require("../../../utils/config.js");
const scrollSever = require("../../../utils/scroll-sever.js");
const type = require("./type.js");
const OFFSET = 10;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuMenuPopper"
  },
  __name: "menu-popper",
  props: {
    disabled: Boolean,
    fixed: Boolean,
    show: Boolean
  },
  emits: ["mouse-in", "mouse-out"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = vue.ref(null);
    const className = vue.ref("top");
    const { props: injectProps } = vue.inject(type.MENU_PROVIDE);
    const instance = vue.getCurrentInstance();
    const parent = vue.ref(null);
    let collapseOffsetX = 0;
    let collapseOffsetY = 0;
    const computedStyle = vue.reactive({
      "--cu-menu-base-height": injectProps.size + "px"
    });
    function getStyle() {
      if (!props.show)
        return;
      const { x, y, width, height } = parent.value.getBoundingClientRect();
      const { width: popperWidth, height: popperHeight } = popperRef.value.getBoundingClientRect();
      if (props.fixed) {
        computedStyle.left = x + collapseOffsetX + "px";
        let t = y + height + OFFSET;
        if (popperHeight + t > window.innerHeight) {
          computedStyle.top = y - popperHeight - OFFSET - collapseOffsetY + "px";
          className.value = "bottom";
        } else {
          computedStyle.top = t + collapseOffsetY + "px";
          className.value = "top";
        }
      } else {
        let l = x + width + OFFSET;
        if (popperWidth + l > window.innerWidth) {
          computedStyle.left = 0 - popperWidth - OFFSET + "px";
        } else {
          computedStyle.left = width + OFFSET + "px";
        }
      }
    }
    function mouseEnter() {
      emit("mouse-in");
    }
    function mouseLeave() {
      emit("mouse-out");
    }
    vue.watch(
      () => props.show,
      (val) => {
        if (val) {
          computedStyle.zIndex = config.getNextZIndex();
          vue.nextTick(() => {
            getStyle();
          });
        }
      }
    );
    vue.watch(
      () => injectProps.collapse,
      (val) => {
        if (val) {
          setTimeout(() => {
            const { width, height } = parent.value.getBoundingClientRect();
            collapseOffsetX = 0 + (width ?? 0) + OFFSET;
            collapseOffsetY = 0 - (height ?? 0) - OFFSET;
          }, 500);
        } else {
          collapseOffsetX = 0;
          collapseOffsetY = 0;
        }
      },
      { immediate: true }
    );
    vue.onMounted(() => {
      var _a;
      parent.value = (_a = instance.parent) == null ? void 0 : _a.vnode.el;
      scrollSever.useScrollSever(parent.value, getStyle);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: "body",
        disabled: !__props.fixed
      }, [
        vue.createVNode(vue.Transition, { name: "cu-menu-popper" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              class: vue.normalizeClass(["cu-menu-popper", __props.fixed ? className.value : void 0]),
              ref_key: "popperRef",
              ref: popperRef,
              style: vue.normalizeStyle(computedStyle),
              onMouseenter: mouseEnter,
              onMouseleave: mouseLeave
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 38), [
              [vue.vShow, __props.show]
            ])
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
exports.default = _sfc_main;
