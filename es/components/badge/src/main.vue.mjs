import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, withDirectives, createElementVNode, createTextVNode, toDisplayString, vShow } from "vue";
import "../style/badge.css";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { badgeProps } from "./main.props.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuBadge"
  },
  __name: "main",
  props: badgeProps,
  setup(__props) {
    const props = __props;
    const currentValue = computed(() => {
      return isNumber(props.value) ? props.value > props.max ? props.max + "+" : props.value : props.value;
    });
    const showBadge = computed(() => {
      return isNumber(props.value) ? props.value <= 0 ? props.zeroShow : true : true;
    });
    const badgeStyle = computed(() => {
      let offset = [].concat(props.offset);
      return {
        "--cu-badge-offsetx": offset[0] ? offset[0] + "px" : void 0,
        "--cu-badge-offsety": offset[1] ? offset[1] + "px" : void 0,
        maxWidth: props.ellipsis ? "100%" : void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["cu-badge", _ctx.type ? "cu-badge--" + _ctx.type : void 0]),
        style: normalizeStyle({ "--cu-badge-color": _ctx.color })
      }, [
        _ctx.$slots["default"] ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true),
        withDirectives(createElementVNode("sup", {
          class: normalizeClass(["cu-badge__inner", [{ position: _ctx.$slots["default"] }, { dot: _ctx.dot && !_ctx.$slots["corner"] }]]),
          style: normalizeStyle(badgeStyle.value)
        }, [
          renderSlot(_ctx.$slots, "corner", {}, () => [
            createTextVNode(toDisplayString(_ctx.dot ? null : currentValue.value), 1)
          ])
        ], 6), [
          [vShow, showBadge.value]
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
