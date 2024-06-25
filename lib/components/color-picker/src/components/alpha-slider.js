"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
const type = require("../type.js");
const alphaSlider = vue.defineComponent({
  name: "CuAlphaSlider",
  setup() {
    const { color } = vue.inject(type.COLORPICKER_PROVIDE);
    const instance = vue.getCurrentInstance();
    var clearMove, clearUp;
    const x = vue.ref(0);
    const barStyle = vue.computed(() => {
      return {
        left: x.value + "px"
      };
    });
    vue.watch(
      () => color.get("alpha"),
      (val) => {
        update(val);
      }
    );
    vue.onMounted(() => {
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
      if (color) {
        const ele = instance == null ? void 0 : instance.vnode.el;
        let val = x.value / (ele == null ? void 0 : ele.clientWidth) * 100;
        color.set("alpha", val);
      }
    }
    return () => {
      return vue.h("div", { class: "cu-color-picker__alpha", onmousedown: mousedown }, [
        vue.h("div", { class: "mixin_black" }),
        vue.h("div", { class: "bar", style: barStyle.value })
      ]);
    };
  }
});
exports.default = alphaSlider;
