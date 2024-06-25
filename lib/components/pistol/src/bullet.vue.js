"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const bullet_props = require("./bullet.props.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-bullet-content" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuBullet"
  },
  __name: "bullet",
  props: bullet_props.bulletProps,
  setup(__props) {
    const props = __props;
    const instance = vue.getCurrentInstance();
    const { addBullet, removeBullet, itemHandleClick, bullets, pistolStyle, props: injectProps } = vue.inject(type.PISTOL_PROVIDE);
    const getInstanceIdx = vue.computed(() => {
      return Object.keys(bullets).indexOf(instance.uid.toString());
    });
    const bulletInstance = vue.reactive({
      sign: props.sign,
      uid: instance.uid,
      style: {}
    });
    addBullet(bulletInstance);
    vue.onUnmounted(() => {
      removeBullet(instance.uid);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("li", {
        class: "cu-bullet",
        style: vue.normalizeStyle([
          bulletInstance.style,
          vue.unref(pistolStyle),
          { "--cu-pistol-delay": (vue.unref(injectProps).iteration ? getInstanceIdx.value * 100 : 0) + "ms" },
          { "--pistol-custom-color": _ctx.color ?? vue.unref(injectProps).color }
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(itemHandleClick)(_ctx.sign))
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.icon ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass([_ctx.icon, "icon"])
            }, null, 2)) : vue.createCommentVNode("", true)
          ])
        ])
      ], 4);
    };
  }
});
exports.default = _sfc_main;
