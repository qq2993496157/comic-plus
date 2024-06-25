"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("../type.js");
const colorPreview = vue.defineComponent({
  name: "CuColorPreview",
  setup() {
    const { props, color } = vue.inject(type.COLORPICKER_PROVIDE);
    return () => {
      return vue.h("div", { class: ["cu-color-picker__preview", { alpha: props.alpha }] }, [
        vue.h("div", { class: "preview__box", style: { background: color.value } })
      ]);
    };
  }
});
exports.default = colorPreview;
