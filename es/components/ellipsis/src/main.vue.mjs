import { defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, Fragment, renderList, renderSlot, createCommentVNode, createTextVNode, toDisplayString, createElementVNode, normalizeClass, normalizeStyle, unref, nextTick } from "vue";
import { isIOS } from "@vueuse/core";
import "../style/ellipsis.css";
import { ellipsisProps } from "./main.props.mjs";
const _hoisted_1 = {
  class: "cu-ellipsis",
  ref: "ellipsis"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { style: { "display": "flex" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuEllipsis"
  },
  __name: "main",
  props: ellipsisProps,
  setup(__props) {
    const props = __props;
    const showMore = ref(false);
    const ellipsisText = ref();
    const buttonRef = ref();
    const hasButton = ref(false);
    function getShowButton() {
      if (!ellipsisText.value)
        return true;
      if (props.clamp >= 0) {
        return ellipsisText.value.scrollHeight > ellipsisText.value.offsetHeight;
      } else {
        return false;
      }
    }
    const buttonHeight = computed(() => {
      var _a;
      if (!buttonRef.value)
        return "-21px";
      return "-" + (((_a = buttonRef.value) == null ? void 0 : _a.getBoundingClientRect().height) ?? "21") + "px";
    });
    function getPresetAttr() {
      nextTick(() => {
        hasButton.value = getShowButton();
      });
    }
    watch(
      () => props.text,
      () => {
        getPresetAttr();
      }
    );
    onMounted(() => {
      getPresetAttr();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.type === "data" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
            return openBlock(), createElementBlock(Fragment, null, [
              _ctx.clamp >= 0 && (showMore.value || index < _ctx.clamp) ? (openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "default", { row: item })
              ])) : createCommentVNode("", true)
            ], 64);
          }), 256)),
          _ctx.data.length > _ctx.clamp ? (openBlock(), createElementBlock("div", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => showMore.value = !showMore.value),
            class: "cu-ellipsis__button"
          }, [
            createTextVNode(toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
            createElementVNode("i", {
              class: normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
            }, null, 2)
          ])) : createCommentVNode("", true)
        ], 64)) : _ctx.type === "text" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", {
              class: normalizeClass(["cu-ellipsis__text", { "show-more": showMore.value, "is-ellipsis": hasButton.value }]),
              ref_key: "ellipsisText",
              ref: ellipsisText,
              style: normalizeStyle({ "--cu-ellipsis-clamp": showMore.value ? 99999999 : _ctx.clamp, "--cu-ellipsis-button-height": buttonHeight.value })
            }, [
              hasButton.value && !unref(isIOS) ? (openBlock(), createElementBlock("span", {
                key: 0,
                onClick: _cache[1] || (_cache[1] = ($event) => showMore.value = !showMore.value),
                ref_key: "buttonRef",
                ref: buttonRef,
                class: "cu-ellipsis__button float"
              }, [
                createTextVNode(toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
                createElementVNode("i", {
                  class: normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
                }, null, 2)
              ], 512)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ])
            ], 6)
          ]),
          hasButton.value && unref(isIOS) ? (openBlock(), createElementBlock("span", {
            key: 0,
            onClick: _cache[2] || (_cache[2] = ($event) => showMore.value = !showMore.value),
            class: "cu-ellipsis__button"
          }, [
            createTextVNode(toDisplayString(showMore.value ? _ctx.closeText : _ctx.openText), 1),
            createElementVNode("i", {
              class: normalizeClass(`cu-icon-double-${showMore.value ? "up" : "down"}`)
            }, null, 2)
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
