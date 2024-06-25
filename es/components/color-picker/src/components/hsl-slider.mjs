import { defineComponent, inject, getCurrentInstance, ref, computed, watch, onMounted, h } from "vue";
import { useEventListener } from "@vueuse/core";
import { COLORPICKER_PROVIDE } from "../type.mjs";
const hslSlider = defineComponent({
  name: "CuHslSlider",
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();
    const x = ref(0);
    var clearMove, clearUp;
    const barStyle = computed(() => {
      return {
        left: x.value + "px"
      };
    });
    const hueValue = computed(() => {
      return color.get("hue");
    });
    watch(
      () => hueValue.value,
      (val) => {
        update(val);
      }
    );
    onMounted(() => {
      update(color.get("hue"));
    });
    function update(c) {
      var { clientWidth } = instance == null ? void 0 : instance.vnode.el;
      clientWidth = Math.max(clientWidth, 250);
      x.value = c / 360 * clientWidth;
    }
    function mousedown(e) {
      const ele = instance == null ? void 0 : instance.vnode.el;
      let left = e.offsetX;
      left = Math.max(0, left);
      left = Math.min(left, ele == null ? void 0 : ele.clientWidth);
      x.value = left;
      updateColor();
      clearMove = useEventListener(document, "mousemove", move);
      clearUp = useEventListener(document, "mouseup", up);
    }
    function move(e) {
      const ele = instance == null ? void 0 : instance.vnode.el;
      let left = e.offsetX;
      left = Math.max(0, left);
      left = Math.min(left, ele == null ? void 0 : ele.clientWidth);
      x.value = left;
      updateColor();
    }
    function up() {
      clearMove == null ? void 0 : clearMove();
      clearUp == null ? void 0 : clearUp();
    }
    function updateColor() {
      const ele = instance == null ? void 0 : instance.vnode.el;
      color.set("hue", Math.round(360 * (x.value / (ele == null ? void 0 : ele.clientWidth))));
    }
    return () => {
      return h("div", { class: "cu-color-picker__hsl", onmousedown: mousedown }, [
        h("div", { class: "bar", style: barStyle.value })
      ]);
    };
  }
});
export {
  hslSlider as default
};
