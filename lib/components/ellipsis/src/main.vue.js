"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/ellipsis.css");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  class: "cu-ellipsis",
  ref: "ellipsis"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { style: { "display": "flex" } };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuEllipsis"
  },
  __name: "main",
  props: main_props.ellipsisProps,
  setup(__props) {
    const props = __props;
    const showMore = vue.ref(false);
    const ellipsisText = vue.ref();
    const buttonRef = vue.ref();
    const hasButton = vue.ref(false);
    function getShowButton() {
      if (!ellipsisText.value)
        return true;
      if (props.clamp >= 0) {
        return ellipsisText.value.scrollHeight > ellipsisText.value.offsetHeight;
      } else {
        return false;
      }
    }
    const buttonHeight = vue.computed(() => {
      var _a;
      if (!buttonRef.value)
        return "-21px";
      return "-" + (((_a = buttonRef.value) == null ? void 0 : _a.getBoundingClientRect().height) ?? "21") + "px";
    });
    function getPresetAttr() {
      vue.nextTick(() => {
        hasButton.value = getShowButton();
      });
    }
    vue.watch(
      () => props.text,
      () => {
        getPresetAttr();
      }
    );
    vue.onMounted(() => {
      getPresetAttr();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        _ctx.type === "data" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              _ctx.clamp >= 0 && (showMore.value || index < _ctx.clamp) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                vue.renderSlot(_ctx.$slots, "default", { row: item })
              ])) : vue.createCommentVNode("", true)
            ], 64);
          }), 256)),
          _ctx.data.length > _ctx.clamp ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => showMore.value = !showMore.value),
            class: "cu-ellipsis__button"
          }, [
            vue.createTextVNode(vue.toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
            vue.createElementVNode("i", {
              class: vue.normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
            }, null, 2)
          ])) : vue.createCommentVNode("", true)
        ], 64)) : _ctx.type === "text" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["cu-ellipsis__text", { "show-more": showMore.value, "is-ellipsis": hasButton.value }]),
              ref_key: "ellipsisText",
              ref: ellipsisText,
              style: vue.normalizeStyle({ "--cu-ellipsis-clamp": showMore.value ? 99999999 : _ctx.clamp, "--cu-ellipsis-button-height": buttonHeight.value })
            }, [
              hasButton.value && !vue.unref(core.isIOS) ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                onClick: _cache[1] || (_cache[1] = ($event) => showMore.value = !showMore.value),
                ref_key: "buttonRef",
                ref: buttonRef,
                class: "cu-ellipsis__button float"
              }, [
                vue.createTextVNode(vue.toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
                vue.createElementVNode("i", {
                  class: vue.normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
                }, null, 2)
              ], 512)) : vue.createCommentVNode("", true),
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.text), 1)
              ])
            ], 6)
          ]),
          hasButton.value && vue.unref(core.isIOS) ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            onClick: _cache[2] || (_cache[2] = ($event) => showMore.value = !showMore.value),
            class: "cu-ellipsis__button"
          }, [
            vue.createTextVNode(vue.toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
            vue.createElementVNode("i", {
              class: vue.normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
            }, null, 2)
          ])) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true)
      ], 512);
    };
  }
});
exports.default = _sfc_main;
