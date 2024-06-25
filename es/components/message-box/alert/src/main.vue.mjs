import { defineComponent, computed, onMounted, openBlock, createBlock, unref, withCtx, createVNode, Transition, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createCommentVNode, toDisplayString, Fragment, resolveDynamicComponent, createTextVNode } from "vue";
import { onKeyStroke } from "@vueuse/core";
import "../../style/message-box.css";
import { CuMode } from "../../../mode/index.mjs";
import { usePopup } from "../../../../utils/hook/popup.mjs";
import "../../../../utils/config.mjs";
import { isString } from "../../../../utils/typescript.mjs";
import { CuButton } from "../../../button/index.mjs";
import { alertProps } from "./main.props.mjs";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "cu-popup__content" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "cu-popup__footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAlert"
  },
  __name: "main",
  props: alertProps,
  setup(__props) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-caution",
      error: "cu-icon-warning-filled"
    };
    const props = __props;
    const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props);
    const headIcon = computed(() => {
      if (!props.showIcon)
        return false;
      if (props.icon)
        return props.icon;
      return props.type ? typeList[props.type] : "";
    });
    onMounted(() => {
      showMode.value = true;
      if (props.escClose) {
        onKeyStroke("Escape", (e) => {
          e.preventDefault();
          close();
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CuMode), {
        show: unref(showMode),
        "lock-scroll": _ctx.lockScroll,
        "custom-class": ["cu-mode__flex", _ctx.modeClass],
        onClose: _cache[2] || (_cache[2] = ($event) => _ctx.destroy()),
        onOpen: unref(onAfterEnter),
        onModeClick: unref(modeHandleClick)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "cu-fade-top",
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => unref(onAfterLeave)())
          }, {
            default: withCtx(() => [
              unref(visible) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["cu-popup", [_ctx.type ? "cu-popup--" + _ctx.type : void 0, { "is-center": _ctx.center }, _ctx.customClass]])
              }, [
                createElementVNode("div", {
                  class: "cu-popup__head",
                  style: normalizeStyle({ color: _ctx.color })
                }, [
                  createElementVNode("div", _hoisted_1, [
                    headIcon.value ? (openBlock(), createElementBlock("i", {
                      key: 0,
                      class: normalizeClass(headIcon.value)
                    }, null, 2)) : createCommentVNode("", true),
                    createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = //@ts-ignore
                    (...args) => unref(close) && unref(close)(...args))
                  })) : createCommentVNode("", true)
                ], 4),
                createElementVNode("div", _hoisted_2, [
                  _ctx.isVNode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    unref(isString)(_ctx.content) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      innerHTML: _ctx.content
                    }, null, 8, _hoisted_3)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.content), { key: 1 }))
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(_ctx.content), 1)
                  ], 64))
                ]),
                _ctx.showButton ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(unref(CuButton), {
                    size: "small",
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type,
                    color: _ctx.color,
                    onClick: unref(close)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.closeButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color", "onClick"])
                ])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "lock-scroll", "custom-class", "onOpen", "onModeClick"]);
    };
  }
});
export {
  _sfc_main as default
};
