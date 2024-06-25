import { defineComponent, getCurrentInstance, inject, computed, onMounted, onBeforeUnmount, withDirectives, openBlock, createElementBlock, renderSlot, vShow } from "vue";
import { CAROUSEL_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-carousel-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuCarouselItem"
  },
  __name: "item",
  setup(__props) {
    const instance = getCurrentInstance();
    const { addItem, removeItem, current } = inject(CAROUSEL_PROVIDE);
    const show = computed(() => {
      return current.value == instance.uid;
    });
    onMounted(() => {
      addItem == null ? void 0 : addItem(instance.uid);
    });
    onBeforeUnmount(() => {
      removeItem == null ? void 0 : removeItem(instance.uid);
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ], 512)), [
        [vShow, show.value]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
