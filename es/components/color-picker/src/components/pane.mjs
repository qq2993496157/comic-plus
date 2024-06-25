import { defineComponent, inject, getCurrentInstance, ref, computed, watch, onMounted, h } from "vue";
import { useEventListener } from "@vueuse/core";
import { COLORPICKER_PROVIDE } from "../type.mjs";
const pane = defineComponent({
  name: "CuColorPane",
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();
    const x = ref(0);
    const y = ref(0);
    var clearMove, clearUp;
    const background = computed(() => {
      return `hsl(${color.get("hue")}deg 100% 50%)`;
    });
    const colorValue = computed(() => {
      return color.get("value");
    });
    watch(
      () => colorValue.value,
      (val) => {
        update(val);
      }
    );
    onMounted(() => {
      update(colorValue.value);
    });
    function update(value) {
      const saturation = color.get("saturation");
      const ele = instance == null ? void 0 : instance.vnode.el;
      let { clientWidth, clientHeight } = ele;
      clientWidth = Math.max(clientWidth, 288);
      clientHeight = Math.max(clientHeight, 160);
      x.value = saturation * clientWidth / 100;
      y.value = (100 - value) * clientHeight / 100;
    }
    const spotStyle = computed(() => {
      return {
        left: x.value + "px",
        top: y.value + "px"
      };
    });
    function mousedown(e) {
      setLeftAndTop(e);
      updateColor();
      clearMove = useEventListener(document, "mousemove", move);
      clearUp = useEventListener(document, "mouseup", up);
    }
    function move(e) {
      setLeftAndTop(e);
      updateColor();
    }
    function setLeftAndTop(e) {
      const ele = instance == null ? void 0 : instance.vnode.el;
      const rect = ele == null ? void 0 : ele.getBoundingClientRect();
      let left = e.clientX - rect.left;
      let top = e.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      x.value = left;
      y.value = top;
    }
    function up() {
      clearMove == null ? void 0 : clearMove();
      clearUp == null ? void 0 : clearUp();
    }
    function updateColor() {
      if (color) {
        const ele = instance == null ? void 0 : instance.vnode.el;
        const { clientWidth, clientHeight } = ele;
        color.set({
          saturation: x.value / clientWidth * 100,
          value: 100 - y.value / clientHeight * 100
        });
      }
    }
    return () => {
      return h(
        "div",
        { class: "cu-color-picker__pane", style: { background: background.value }, onmousedown: mousedown },
        [
          h("div", { class: "mixin_white" }),
          h("div", { class: "mixin_black" }),
          h("div", { class: "spot", style: spotStyle.value })
        ]
      );
    };
  }
});
export {
  pane as default
};
