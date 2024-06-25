"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../style/message-box.css");
const instance = require("./instance.js");
const typescript = require("../../../../utils/typescript.js");
const color = require("../../../../utils/color.js");
const config = require("../../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = ["uid"];
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuMessage"
  },
  __name: "main",
  props: main_props.messageProps,
  setup(__props, { expose: __expose }) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-warning",
      error: "cu-icon-close-one"
    };
    const props = __props;
    const instance$1 = vue.getCurrentInstance();
    const height = vue.ref(0);
    const show = vue.ref(false);
    const timer = vue.ref(null);
    const zIndex = config.getNextZIndex();
    function closeMessage() {
      var _a;
      show.value = false;
      if (timer.value) {
        clearTimeout(timer.value);
        timer.value = null;
      }
      (_a = props.close) == null ? void 0 : _a.call(props, props.id);
    }
    const style = vue.computed(() => {
      return {
        color: props.color,
        backgroundColor: color.colorBlend(color.colorToRgba(props.color), 10),
        top: top.value ? top.value + "px" : void 0,
        "z-index": zIndex
      };
    });
    const top = vue.computed(() => {
      return instance.getOffset(props.id);
    });
    const offset = vue.computed(() => height.value + top.value + 10);
    function getHeight() {
      let el = instance$1 == null ? void 0 : instance$1.vnode.el;
      height.value = el == null ? void 0 : el.getBoundingClientRect().height;
    }
    vue.onMounted(() => {
      show.value = true;
      if (props.duration === -1)
        return;
      timer.value = setTimeout(() => {
        closeMessage();
      }, props.duration);
    });
    __expose({
      offset
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "fade-message",
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => {
          var _a;
          return (_a = _ctx.destroy) == null ? void 0 : _a.call(_ctx);
        }),
        onAfterEnter: getHeight
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("span", {
            class: vue.normalizeClass(["cu-message", _ctx.type ? "cu-message--" + _ctx.type : void 0]),
            uid: _ctx.id,
            style: vue.normalizeStyle(style.value)
          }, [
            _ctx.showIcon ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass([_ctx.icon ?? typeList[_ctx.type], "prefix-icon"])
            }, null, 2)) : vue.createCommentVNode("", true),
            vue.createElementVNode("span", null, [
              _ctx.isVNode ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.unref(typescript.isString)(_ctx.content) ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_2)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.content), { key: 1 }))
              ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
              ], 64))
            ]),
            _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 1,
              class: "cu-icon-close-one close",
              onClick: closeMessage
            })) : vue.createCommentVNode("", true)
          ], 14, _hoisted_1), [
            [vue.vShow, show.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
exports.default = _sfc_main;
