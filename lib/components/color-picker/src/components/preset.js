"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("../type.js");
const color = require("../../utils/color.js");
const presetList = vue.defineComponent({
  name: "CuColorPreset",
  props: {
    predefine: Array
  },
  setup(props) {
    const { props: injectProps, color: color$1 } = vue.inject(type.COLORPICKER_PROVIDE);
    const rgbaColors = vue.reactive(parseColors(props == null ? void 0 : props.predefine));
    function parseColors(colors) {
      return colors.map((value) => {
        const c = new color.default();
        c.enableAlpha = true;
        c.format = injectProps.format || "rgba";
        c.fromString(value);
        return c;
      });
    }
    function selectColor(index) {
      color$1.fromString(props == null ? void 0 : props.predefine[index]);
    }
    return () => {
      return vue.h("ul", { class: "cu-color-picker__preset" }, [
        rgbaColors.map((item, idx) => {
          return vue.h("li", { onclick: () => selectColor(idx) }, [vue.h("span", { style: { background: item.value } })]);
        })
      ]);
    };
  }
});
exports.default = presetList;
