"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
const type = require("../type.js");
const hslSlider = vue.defineComponent({
  name: "CuHslSlider",
  setup() {
    const { color } = vue.inject(type.COLORPICKER_PROVIDE);
    const instance = vue.getCurrentInstance();
    const x = vue.ref(0);
    var clearMove, clearUp;
    const barStyle = vue.computed(() => {
      return {
        left: x.value + "px"
      };
    });
    const hueValue = vue.computed(() => {
      return color.get("hue");
    });
    vue.watch(
      () => hueValue.value,
      (val) => {
        update(val);
      }
    );
    vue.onMounted(() => {
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
      clearMove = core.useEventListener(document, "mousemove", move);
      clearUp = core.useEventListener(document, "mouseup", up);
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
      return vue.h("div", { class: "cu-color-picker__hsl", onmousedown: mousedown }, [
        vue.h("div", { class: "bar", style: barStyle.value })
      ]);
    };
  }
});
exports.default = hslSlider;
