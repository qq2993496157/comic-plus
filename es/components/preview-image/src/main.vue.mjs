import { defineComponent, ref, computed, onMounted, nextTick, openBlock, createBlock, unref, withCtx, createVNode, Transition, withDirectives, createElementVNode, normalizeStyle, vShow } from "vue";
import { useDraggable } from "@vueuse/core";
import "../style/preview-image.css";
import { CuMode } from "../../mode/index.mjs";
import { previewImageProps } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-preview-image" };
const _hoisted_2 = { class: "cu-preview-image__tools" };
const _hoisted_3 = { class: "cu-preview-image__imgtools" };
const _hoisted_4 = { class: "cu-preview-image__pic" };
const _hoisted_5 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuPreviewImage"
  },
  __name: "main",
  props: previewImageProps,
  setup(__props) {
    const props = __props;
    const showMode = ref(false);
    const showPreview = ref(false);
    const currentIndex = ref(0);
    const scale = ref(1);
    const rotate = ref(0);
    const imageBoxRef = ref(null);
    const initialValue = ref({});
    const imgStyle = computed(() => {
      return {
        transform: `scale(${scale.value}) rotate(${rotate.value}deg)`
      };
    });
    const { style } = useDraggable(imageBoxRef, {
      initialValue: initialValue.value
    });
    const customStyle = computed(() => {
      return style.value;
    });
    function onAfterEnter() {
      showPreview.value = true;
    }
    function onModeAfterLeave() {
      var _a;
      (_a = props.destroy) == null ? void 0 : _a.call(props);
    }
    function onAfterLeave() {
      showMode.value = false;
    }
    function minus() {
      currentIndex.value--;
      if (currentIndex.value < 0) {
        currentIndex.value = props.list.length - 1;
      }
    }
    function plus() {
      currentIndex.value++;
      if (currentIndex.value >= props.list.length) {
        currentIndex.value = 0;
      }
    }
    function getInitialPosition() {
      return {
        x: (window.innerWidth - imageBoxRef.value.getBoundingClientRect().width) / 2,
        y: (window.innerHeight - imageBoxRef.value.getBoundingClientRect().height) / 2
      };
    }
    onMounted(() => {
      showMode.value = true;
      currentIndex.value = props.current || 0;
      nextTick(() => {
        initialValue.value = getInitialPosition();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CuMode), {
        show: showMode.value,
        onOpen: onAfterEnter,
        onClose: onModeAfterLeave,
        "lock-scroll": true,
        onModeClick: _cache[5] || (_cache[5] = ($event) => showPreview.value = false)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "cu-fade-top",
            onAfterLeave
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", _hoisted_1, [
                createElementVNode("div", _hoisted_2, [
                  createElementVNode("i", {
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = ($event) => showPreview.value = false)
                  }),
                  createElementVNode("i", {
                    class: "cu-icon-left",
                    onClick: minus
                  }),
                  createElementVNode("i", {
                    class: "cu-icon-right",
                    onClick: plus
                  })
                ]),
                createElementVNode("div", _hoisted_3, [
                  createElementVNode("i", {
                    class: "cu-icon-zoom-in",
                    onClick: _cache[1] || (_cache[1] = ($event) => scale.value += 0.2)
                  }),
                  createElementVNode("i", {
                    class: "cu-icon-zoom-out",
                    onClick: _cache[2] || (_cache[2] = ($event) => scale.value -= 0.2)
                  }),
                  createElementVNode("i", {
                    class: "cu-icon-undo",
                    onClick: _cache[3] || (_cache[3] = ($event) => rotate.value -= 90)
                  }),
                  createElementVNode("i", {
                    class: "cu-icon-redo",
                    onClick: _cache[4] || (_cache[4] = ($event) => rotate.value += 90)
                  })
                ]),
                createElementVNode("div", _hoisted_4, [
                  createElementVNode("div", {
                    ref_key: "imageBoxRef",
                    ref: imageBoxRef,
                    style: normalizeStyle(customStyle.value)
                  }, [
                    createElementVNode("img", {
                      src: _ctx.list[currentIndex.value],
                      style: normalizeStyle(imgStyle.value)
                    }, null, 12, _hoisted_5)
                  ], 4)
                ])
              ], 512), [
                [vShow, showPreview.value]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
export {
  _sfc_main as default
};
