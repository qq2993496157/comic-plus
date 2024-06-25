import { defineComponent, ref, computed, watch, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementBlock, normalizeClass, withModifiers, normalizeStyle, renderSlot, createCommentVNode } from "vue";
import "../style/mode.css";
import { getNextZIndex } from "../../../utils/config.mjs";
import { useLookScroll } from "../../../utils/look-scroll.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuMode"
  },
  __name: "main",
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    appendTo: {
      type: String,
      default: "body"
    },
    show: Boolean,
    customClass: [String, Array],
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ["open", "close", "mode-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const zIndex = ref(0);
    const isLockScroll = computed(() => props.show);
    if (props.lockScroll) {
      useLookScroll(isLockScroll);
    }
    watch(
      () => props.show,
      (val) => {
        if (val) {
          zIndex.value = getNextZIndex();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: __props.appendTo,
        disabled: !__props.appendToBody
      }, [
        createVNode(Transition, {
          name: "cu-fade",
          onAfterEnter: _cache[1] || (_cache[1] = ($event) => emit("open")),
          onAfterLeave: _cache[2] || (_cache[2] = ($event) => emit("close"))
        }, {
          default: withCtx(() => [
            __props.show ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["cu-mode", [...[].concat(__props.customClass), { "append-to-body": __props.appendToBody }]]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("mode-click"), ["self"])),
              style: normalizeStyle({ zIndex: zIndex.value })
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 6)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 8, ["to", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
