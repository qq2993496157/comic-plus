import { defineComponent, ref, inject, getCurrentInstance, reactive, watch, nextTick, onMounted, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, renderSlot, vShow } from "vue";
import { getNextZIndex } from "../../../utils/config.mjs";
import { useScrollSever } from "../../../utils/scroll-sever.mjs";
import { MENU_PROVIDE } from "./type.mjs";
const OFFSET = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const popperRef = ref(null);
    const className = ref("top");
    const { props: injectProps } = inject(MENU_PROVIDE);
    const instance = getCurrentInstance();
    const parent = ref(null);
    let collapseOffsetX = 0;
    let collapseOffsetY = 0;
    const computedStyle = reactive({
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
    watch(
      () => props.show,
      (val) => {
        if (val) {
          computedStyle.zIndex = getNextZIndex();
          nextTick(() => {
            getStyle();
          });
        }
      }
    );
    watch(
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
    onMounted(() => {
      var _a;
      parent.value = (_a = instance.parent) == null ? void 0 : _a.vnode.el;
      useScrollSever(parent.value, getStyle);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !__props.fixed
      }, [
        createVNode(Transition, { name: "cu-menu-popper" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["cu-menu-popper", __props.fixed ? className.value : void 0]),
              ref_key: "popperRef",
              ref: popperRef,
              style: normalizeStyle(computedStyle),
              onMouseenter: mouseEnter,
              onMouseleave: mouseLeave
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 38), [
              [vShow, __props.show]
            ])
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
