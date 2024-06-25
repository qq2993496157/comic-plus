import { defineComponent, computed, openBlock, createBlock, unref, withCtx, createVNode, Transition, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/dialog.css";
import { CuMode } from "../../mode/index.mjs";
import { usePopup } from "../../../utils/hook/popup.mjs";
import "../../../utils/config.mjs";
import { dialogProps, dialogEmits } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-dialog__header" };
const _hoisted_2 = { class: "cu-dialog__content" };
const _hoisted_3 = {
  key: 0,
  class: "cu-dialog__footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuDialog"
  },
  __name: "main",
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props, emit);
    const dialogStyle = computed(() => {
      return {
        width: props.width,
        marginTop: props.top,
        backgroundColor: props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CuMode), {
        show: unref(showMode),
        "lock-scroll": _ctx.lockScroll,
        "append-to-body": _ctx.appendToBody,
        "append-to": _ctx.appendTo,
        customClass: _ctx.modeClass,
        onClose: _cache[3] || (_cache[3] = ($event) => emit("close")),
        onOpen: unref(onAfterEnter),
        onModeClick: unref(modeHandleClick)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: _ctx.transitionClass,
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => unref(onAfterLeave)()),
            onAfterEnter: _cache[2] || (_cache[2] = ($event) => emit("open"))
          }, {
            default: withCtx(() => [
              unref(visible) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["cu-dialog", _ctx.customClass]),
                style: normalizeStyle(dialogStyle.value)
              }, [
                createElementVNode("div", _hoisted_1, [
                  createElementVNode("div", null, [
                    renderSlot(_ctx.$slots, "header", {}, () => [
                      createTextVNode(toDisplayString(_ctx.header), 1)
                    ])
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close close",
                    onClick: _cache[0] || (_cache[0] = //@ts-ignore
                    (...args) => unref(close) && unref(close)(...args))
                  })) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  renderSlot(_ctx.$slots, "footer")
                ])) : createCommentVNode("", true)
              ], 6)) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["show", "lock-scroll", "append-to-body", "append-to", "customClass", "onOpen", "onModeClick"]);
    };
  }
});
export {
  _sfc_main as default
};
