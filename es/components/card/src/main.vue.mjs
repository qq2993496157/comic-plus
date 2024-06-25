import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createCommentVNode } from "vue";
import "../style/card.css";
import { cardProps } from "./main.props.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuCard"
  },
  __name: "main",
  props: cardProps,
  setup(__props) {
    const cardRef = ref(null);
    const showTurn = ref(false);
    const style = computed(() => {
      if (!cardRef.value)
        return void 0;
      let style2 = cardRef.value.getBoundingClientRect();
      let l = 0 - (style2.width - style2.width * 0.3) + "px";
      return { "--cu-card-margin-left": l };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-card", [_ctx.shadow, { "turn-card": _ctx.turnCard }]]),
        onClick: _cache[0] || (_cache[0] = ($event) => showTurn.value = !showTurn.value),
        ref_key: "cardRef",
        ref: cardRef,
        style: normalizeStyle(style.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["cu-card__container", [{ turn: !showTurn.value && _ctx.turnType === "click" }, _ctx.turnType]])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.turnCard ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["cu-card__opposite", [{ turn: showTurn.value && _ctx.turnType === "click" }, _ctx.turnType]])
        }, [
          renderSlot(_ctx.$slots, "opposite")
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
