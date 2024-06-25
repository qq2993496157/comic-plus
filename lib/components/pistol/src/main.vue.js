"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/pistol.css");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuPistol"
  },
  __name: "main",
  props: main_props.pistolProps,
  emits: main_props.pistolEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const bullets = vue.reactive({});
    const pistolRef = vue.ref(null);
    const show = vue.ref(false);
    let timer;
    const bulletsLength = vue.computed(() => {
      return Object.keys(bullets).length;
    });
    const elNums = vue.computed(() => {
      return props.equal ? bulletsLength.value : 8;
    });
    const pistolStyle = vue.computed(() => {
      return {
        width: props.size + "px",
        height: props.size + "px",
        "--pistol-custom-color": props.color
      };
    });
    function containerHandleClick(e) {
      emit("trigger-click", e);
      if (props.trigger !== "click")
        return;
      show.value = !show.value;
    }
    function getEx(n, s) {
      if (!props.equal) {
        n = Math.max(8, n);
      }
      var t = s / (2 * Math.tan(Math.PI / n));
      var c = t - s / 2;
      c = Math.max(15, c);
      return c + 10;
    }
    function setItemStyle() {
      let len = bulletsLength.value;
      if (!props.equal) {
        len = Math.max(8, len);
      }
      for (let i = 0; i < len; i++) {
        const { x, y } = getPostion(i, len);
        let key = Object.keys(bullets)[i];
        if (bullets[key]) {
          bullets[key].style = {
            "--x": x + "px",
            "--y": y + "px"
          };
        }
      }
    }
    function getPostion(i, len) {
      var x = 0, y = 0;
      if (props.mode === "wheel") {
        let d = props.size / 2;
        let ex = getEx(bulletsLength.value, props.size);
        var angle = getAngle(i, len);
        x = (d + ex) * Math.cos(angle);
        y = (d + ex) * Math.sin(angle);
      } else {
        if (["left", "right"].includes(props.direction)) {
          x = (i + 1) * props.size + 4 * (i + 1);
          if (props.direction === "left") {
            x = 0 - x;
          }
        } else {
          y = (i + 1) * props.size + 4 * (i + 1);
          if (props.direction === "top") {
            y = 0 - y;
          }
        }
      }
      return { x, y };
    }
    function getAngle(i, len) {
      let angleStep = 2 * Math.PI / elNums.value;
      return {
        top: i * angleStep + 3 * Math.PI / 2,
        left: (i - 0.5 * len) * angleStep,
        bottom: Math.PI / 2 + i * angleStep,
        right: 0 + i * angleStep
      }[props.direction ?? "top"];
    }
    if (props.trigger === "hover") {
      core.useEventListener(pistolRef, "mouseenter", handleMouseEnter);
      core.useEventListener(pistolRef, "mouseleave", handleMouseLeave);
    }
    if (props.trigger === "click") {
      core.onClickOutside(pistolRef, () => show.value = false);
    }
    function handleMouseEnter() {
      show.value = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function handleMouseLeave() {
      timer = setTimeout(() => {
        show.value = false;
      }, 300);
    }
    vue.watch(show, (val) => {
      if (val) {
        emit("open");
      } else {
        emit("close");
      }
    });
    vue.watch([bulletsLength, () => props.size, () => props.direction, () => props.equal], () => {
      setItemStyle();
    });
    function addBullet(item) {
      bullets[item.uid] = item;
    }
    function removeBullet(uid) {
      if (bullets[uid]) {
        delete bullets[uid];
      }
    }
    function itemHandleClick(sign) {
      if (!sign) {
        vue.warn("The current menu item does not have a sign attribute");
      }
      emit("shoot", sign);
      if (props.chooseAfterHide) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        show.value = false;
      }
    }
    function open() {
      show.value = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function close() {
      show.value = false;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    vue.provide(type.PISTOL_PROVIDE, {
      props,
      pistolStyle,
      bullets,
      addBullet,
      removeBullet,
      itemHandleClick
    });
    __expose({
      open,
      close
    });
    vue.onMounted(() => {
      setItemStyle();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-pistol", [{ expand: show.value }, _ctx.type ? "cu-pistol--" + _ctx.type : void 0, _ctx.mode ? "mode-" + _ctx.mode : void 0]]),
        ref_key: "pistolRef",
        ref: pistolRef,
        style: vue.normalizeStyle({ "--cu-pistol-size": props.size + "px" })
      }, [
        vue.createElementVNode("div", {
          class: "cu-pistol__container",
          style: vue.normalizeStyle(pistolStyle.value),
          onClick: containerHandleClick
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("i", {
              class: vue.normalizeClass(["default-icon", _ctx.icon ?? "cu-icon-hamburger-button"])
            }, null, 2)
          ])
        ], 4),
        vue.createElementVNode("ul", {
          class: vue.normalizeClass(["cu-pistol__magazine", props.direction])
        }, [
          vue.renderSlot(_ctx.$slots, "magazine")
        ], 2)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
