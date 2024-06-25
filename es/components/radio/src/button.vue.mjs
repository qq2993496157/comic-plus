import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, withDirectives, createElementVNode, vShow, renderSlot, createTextVNode, toDisplayString } from "vue";
import "../style/radio.css";
import { radioProps, radioEmits } from "./main.props.mjs";
import { useRadio } from "./use-radio.mjs";
const _hoisted_1 = ["disabled", "checked", "value"];
const _hoisted_2 = { class: "cu-radio__label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuRadioButton"
  },
  __name: "button",
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { isCheck, changeValue, currentSize } = useRadio(props, emit);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["cu-radio-button", [{ "is-disabled": _ctx.disabled, "is-checked": unref(isCheck) }, unref(currentSize)]]),
        style: normalizeStyle({
          "--cu-radio-active-color": _ctx.activeColor
        })
      }, [
        withDirectives(createElementVNode("input", {
          type: "radio",
          disabled: _ctx.disabled,
          checked: unref(isCheck),
          value: _ctx.value,
          onChange: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(changeValue) && unref(changeValue)(...args))
        }, null, 40, _hoisted_1), [
          [vShow, false]
        ]),
        createElementVNode("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
