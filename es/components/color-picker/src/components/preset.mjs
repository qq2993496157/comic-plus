import { defineComponent, inject, reactive, h } from "vue";
import { COLORPICKER_PROVIDE } from "../type.mjs";
import Color from "../../utils/color.mjs";
const presetList = defineComponent({
  name: "CuColorPreset",
  props: {
    predefine: Array
  },
  setup(props) {
    const { props: injectProps, color } = inject(COLORPICKER_PROVIDE);
    const rgbaColors = reactive(parseColors(props == null ? void 0 : props.predefine));
    function parseColors(colors) {
      return colors.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = injectProps.format || "rgba";
        c.fromString(value);
        return c;
      });
    }
    function selectColor(index) {
      color.fromString(props == null ? void 0 : props.predefine[index]);
    }
    return () => {
      return h("ul", { class: "cu-color-picker__preset" }, [
        rgbaColors.map((item, idx) => {
          return h("li", { onclick: () => selectColor(idx) }, [h("span", { style: { background: item.value } })]);
        })
      ]);
    };
  }
});
export {
  presetList as default
};
