import { defineComponent, getCurrentInstance, inject, computed, reactive, onUnmounted, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, renderSlot, normalizeClass, createCommentVNode } from "vue";
import { bulletProps } from "./bullet.props.mjs";
import { PISTOL_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-bullet-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuBullet"
  },
  __name: "bullet",
  props: bulletProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const { addBullet, removeBullet, itemHandleClick, bullets, pistolStyle, props: injectProps } = inject(PISTOL_PROVIDE);
    const getInstanceIdx = computed(() => {
      return Object.keys(bullets).indexOf(instance.uid.toString());
    });
    const bulletInstance = reactive({
      sign: props.sign,
      uid: instance.uid,
      style: {}
    });
    addBullet(bulletInstance);
    onUnmounted(() => {
      removeBullet(instance.uid);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: "cu-bullet",
        style: normalizeStyle([
          bulletInstance.style,
          unref(pistolStyle),
          { "--cu-pistol-delay": (unref(injectProps).iteration ? getInstanceIdx.value * 100 : 0) + "ms" },
          { "--pistol-custom-color": _ctx.color ?? unref(injectProps).color }
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => unref(itemHandleClick)(_ctx.sign))
      }, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass([_ctx.icon, "icon"])
            }, null, 2)) : createCommentVNode("", true)
          ])
        ])
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
