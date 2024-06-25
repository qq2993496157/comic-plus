import { defineComponent, ref, computed, onMounted, openBlock, createBlock, unref, withCtx, createVNode, Transition, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createCommentVNode, toDisplayString, Fragment, resolveDynamicComponent, createTextVNode } from "vue";
import { onKeyStroke } from "@vueuse/core";
import "../../style/message-box.css";
import { CuMode } from "../../../mode/index.mjs";
import { usePopup } from "../../../../utils/hook/popup.mjs";
import "../../../../utils/config.mjs";
import { isString } from "../../../../utils/typescript.mjs";
import _sfc_main$1 from "../../../button/src/main.vue.mjs";
import { confirmProps } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-popup__head" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "cu-popup__content" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "cu-popup__footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuConfirm"
  },
  __name: "main",
  props: confirmProps,
  setup(__props) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-caution",
      error: "cu-icon-warning-filled"
    };
    const props = __props;
    const { visible, showMode, onAfterEnter, close, onAfterLeave } = usePopup(props);
    const TYPE = ref("cancel");
    const headIcon = computed(() => {
      if (!props.showIcon)
        return false;
      if (props.icon)
        return props.icon;
      return props.type ? typeList[props.type] : "";
    });
    function handleModeClose() {
      cancel("cancel");
    }
    function cancel(val) {
      TYPE.value = val;
      close();
    }
    function confirm() {
      close();
      TYPE.value = "confirm";
    }
    onMounted(() => {
      showMode.value = true;
      if (props.escClose) {
        onKeyStroke("Escape", (e) => {
          e.preventDefault();
          cancel(props.distinguishCloseAndCancel ? "esc" : "cancel");
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CuMode), {
        show: unref(showMode),
        "custom-class": ["cu-mode__flex", _ctx.modeClass],
        "lock-scroll": _ctx.lockScroll,
        onClose: _cache[2] || (_cache[2] = ($event) => _ctx.destroy(TYPE.value)),
        onOpen: unref(onAfterEnter),
        onModeClick: _cache[3] || (_cache[3] = ($event) => handleModeClose())
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "cu-fade-top",
            onAfterLeave: unref(onAfterLeave)
          }, {
            default: withCtx(() => [
              unref(visible) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["cu-popup", [_ctx.type ? "cu-popup--" + _ctx.type : void 0, { "is-center": _ctx.center }, _ctx.customClass]])
              }, [
                createElementVNode("div", _hoisted_1, [
                  createElementVNode("div", _hoisted_2, [
                    headIcon.value ? (openBlock(), createElementBlock("i", {
                      key: 0,
                      class: normalizeClass(headIcon.value),
                      style: normalizeStyle({ color: _ctx.color })
                    }, null, 6)) : createCommentVNode("", true),
                    createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = ($event) => cancel(_ctx.distinguishCloseAndCancel ? "close" : "cancel"))
                  })) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_3, [
                  _ctx.isVNode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    unref(isString)(_ctx.content) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      innerHTML: _ctx.content
                    }, null, 8, _hoisted_4)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.content), { key: 1 }))
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(_ctx.content), 1)
                  ], 64))
                ]),
                createElementVNode("div", _hoisted_5, [
                  _ctx.showCancelButton ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 0,
                    size: "small",
                    plain: "",
                    color: _ctx.color,
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type || void 0,
                    onClick: _cache[1] || (_cache[1] = ($event) => cancel("cancel"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.cancelButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["color", "type"])) : createCommentVNode("", true),
                  _ctx.showConfirmButton ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 1,
                    size: "small",
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type || "primary",
                    color: _ctx.color,
                    onClick: confirm
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.confirmButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onAfterLeave"])
        ]),
        _: 1
      }, 8, ["show", "custom-class", "lock-scroll", "onOpen"]);
    };
  }
});
export {
  _sfc_main as default
};
