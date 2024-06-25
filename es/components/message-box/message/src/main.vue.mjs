import { defineComponent, getCurrentInstance, ref, computed, onMounted, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, createCommentVNode, Fragment, unref, resolveDynamicComponent, createTextVNode, toDisplayString, vShow } from "vue";
import "../../style/message-box.css";
import { getOffset } from "./instance.mjs";
import { isString } from "../../../../utils/typescript.mjs";
import { colorBlend, colorToRgba } from "../../../../utils/color.mjs";
import { getNextZIndex } from "../../../../utils/config.mjs";
import { messageProps } from "./main.props.mjs";
const _hoisted_1 = ["uid"];
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuMessage"
  },
  __name: "main",
  props: messageProps,
  setup(__props, { expose: __expose }) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-warning",
      error: "cu-icon-close-one"
    };
    const props = __props;
    const instance = getCurrentInstance();
    const height = ref(0);
    const show = ref(false);
    const timer = ref(null);
    const zIndex = getNextZIndex();
    function closeMessage() {
      var _a;
      show.value = false;
      if (timer.value) {
        clearTimeout(timer.value);
        timer.value = null;
      }
      (_a = props.close) == null ? void 0 : _a.call(props, props.id);
    }
    const style = computed(() => {
      return {
        color: props.color,
        backgroundColor: colorBlend(colorToRgba(props.color), 10),
        top: top.value ? top.value + "px" : void 0,
        "z-index": zIndex
      };
    });
    const top = computed(() => {
      return getOffset(props.id);
    });
    const offset = computed(() => height.value + top.value + 10);
    function getHeight() {
      let el = instance == null ? void 0 : instance.vnode.el;
      height.value = el == null ? void 0 : el.getBoundingClientRect().height;
    }
    onMounted(() => {
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
      return openBlock(), createBlock(Transition, {
        name: "fade-message",
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => {
          var _a;
          return (_a = _ctx.destroy) == null ? void 0 : _a.call(_ctx);
        }),
        onAfterEnter: getHeight
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("span", {
            class: normalizeClass(["cu-message", _ctx.type ? "cu-message--" + _ctx.type : void 0]),
            uid: _ctx.id,
            style: normalizeStyle(style.value)
          }, [
            _ctx.showIcon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass([_ctx.icon ?? typeList[_ctx.type], "prefix-icon"])
            }, null, 2)) : createCommentVNode("", true),
            createElementVNode("span", null, [
              _ctx.isVNode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                unref(isString)(_ctx.content) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_2)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.content), { key: 1 }))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(_ctx.content), 1)
              ], 64))
            ]),
            _ctx.showClose ? (openBlock(), createElementBlock("i", {
              key: 1,
              class: "cu-icon-close-one close",
              onClick: closeMessage
            })) : createCommentVNode("", true)
          ], 14, _hoisted_1), [
            [vShow, show.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
