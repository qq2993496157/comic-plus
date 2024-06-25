"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/preview-image.css");
const index = require("../../mode/index.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-preview-image" };
const _hoisted_2 = { class: "cu-preview-image__tools" };
const _hoisted_3 = { class: "cu-preview-image__imgtools" };
const _hoisted_4 = { class: "cu-preview-image__pic" };
const _hoisted_5 = ["src"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuPreviewImage"
  },
  __name: "main",
  props: main_props.previewImageProps,
  setup(__props) {
    const props = __props;
    const showMode = vue.ref(false);
    const showPreview = vue.ref(false);
    const currentIndex = vue.ref(0);
    const scale = vue.ref(1);
    const rotate = vue.ref(0);
    const imageBoxRef = vue.ref(null);
    const initialValue = vue.ref({});
    const imgStyle = vue.computed(() => {
      return {
        transform: `scale(${scale.value}) rotate(${rotate.value}deg)`
      };
    });
    const { style } = core.useDraggable(imageBoxRef, {
      initialValue: initialValue.value
    });
    const customStyle = vue.computed(() => {
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
    vue.onMounted(() => {
      showMode.value = true;
      currentIndex.value = props.current || 0;
      vue.nextTick(() => {
        initialValue.value = getInitialPosition();
      });
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index.CuMode), {
        show: showMode.value,
        onOpen: onAfterEnter,
        onClose: onModeAfterLeave,
        "lock-scroll": true,
        onModeClick: _cache[5] || (_cache[5] = ($event) => showPreview.value = false)
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.Transition, {
            name: "cu-fade-top",
            onAfterLeave
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", _hoisted_1, [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createElementVNode("i", {
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = ($event) => showPreview.value = false)
                  }),
                  vue.createElementVNode("i", {
                    class: "cu-icon-left",
                    onClick: minus
                  }),
                  vue.createElementVNode("i", {
                    class: "cu-icon-right",
                    onClick: plus
                  })
                ]),
                vue.createElementVNode("div", _hoisted_3, [
                  vue.createElementVNode("i", {
                    class: "cu-icon-zoom-in",
                    onClick: _cache[1] || (_cache[1] = ($event) => scale.value += 0.2)
                  }),
                  vue.createElementVNode("i", {
                    class: "cu-icon-zoom-out",
                    onClick: _cache[2] || (_cache[2] = ($event) => scale.value -= 0.2)
                  }),
                  vue.createElementVNode("i", {
                    class: "cu-icon-undo",
                    onClick: _cache[3] || (_cache[3] = ($event) => rotate.value -= 90)
                  }),
                  vue.createElementVNode("i", {
                    class: "cu-icon-redo",
                    onClick: _cache[4] || (_cache[4] = ($event) => rotate.value += 90)
                  })
                ]),
                vue.createElementVNode("div", _hoisted_4, [
                  vue.createElementVNode("div", {
                    ref_key: "imageBoxRef",
                    ref: imageBoxRef,
                    style: vue.normalizeStyle(customStyle.value)
                  }, [
                    vue.createElementVNode("img", {
                      src: _ctx.list[currentIndex.value],
                      style: vue.normalizeStyle(imgStyle.value)
                    }, null, 12, _hoisted_5)
                  ], 4)
                ])
              ], 512), [
                [vue.vShow, showPreview.value]
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
exports.default = _sfc_main;
