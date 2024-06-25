import { defineComponent, inject, getCurrentInstance, ref, computed, watch, onMounted, h } from "vue";
import { useEventListener } from "@vueuse/core";
import { COLORPICKER_PROVIDE } from "../type.mjs";
const alphaSlider = defineComponent({
  name: "CuAlphaSlider",
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();
    var clearMove, clearUp;
    const x = ref(0);
    const barStyle = computed(() => {
      return {
        left: x.value + "px"
      };
    });
    watch(
      () => color.get("alpha"),
      (val) => {
        update(val);
      }
    );
    onMounted(() => {
      update(color.get("alpha"));
    });
    function update(c) {
      var { clientWidth } = instance == null ? void 0 : instance.vnode.el;
      clientWidth = Math.max(clientWidth, 250);
      x.value = clientWidth * c / 100;
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
      if (color) {
        const ele = instance == null ? void 0 : instance.vnode.el;
        let val = x.value / (ele == null ? void 0 : ele.clientWidth) * 100;
        color.set("alpha", val);
      }
    }
    return () => {
      return h("div", { class: "cu-color-picker__alpha", onmousedown: mousedown }, [
        h("div", { class: "mixin_black" }),
        h("div", { class: "bar", style: barStyle.value })
      ]);
    };
  }
});
export {
  alphaSlider as default
};
