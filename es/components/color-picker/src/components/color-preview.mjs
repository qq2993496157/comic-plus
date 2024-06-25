import { defineComponent, inject, h } from "vue";
import { COLORPICKER_PROVIDE } from "../type.mjs";
const colorPreview = defineComponent({
  name: "CuColorPreview",
  setup() {
    const { props, color } = inject(COLORPICKER_PROVIDE);
    return () => {
      return h("div", { class: ["cu-color-picker__preview", { alpha: props.alpha }] }, [
        h("div", { class: "preview__box", style: { background: color.value } })
      ]);
    };
  }
});
export {
  colorPreview as default
};
