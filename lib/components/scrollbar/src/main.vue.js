"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/scrollbar.css");
const main_props = require("./main.props.js");
const minBarSize = 16;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuScrollbar"
  },
  __name: "main",
  props: main_props.scrollbarProps,
  emits: main_props.scrollbarEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const barContainerRef = vue.ref();
    const containerDivRef = vue.ref();
    const barTop = vue.ref(0);
    const barLeft = vue.ref(0);
    const barHeight = vue.ref(0);
    const barWidth = vue.ref(0);
    const hasThumby = vue.ref(false);
    const hasThumbx = vue.ref(false);
    var clearMoveY, clearMoveX, clearUp;
    vue.watch(
      () => props.display,
      () => {
        computedShowThumb();
      }
    );
    const { width: cWidth, height: cHeight } = core.useElementSize(barContainerRef.value);
    const { width: dWidth, height: dHeight } = core.useElementSize(containerDivRef.value);
    vue.watch([cWidth, cHeight, dWidth, dHeight], () => {
      resateScrollBar();
    });
    function computedShowThumb() {
      var _a, _b, _c, _d;
      hasThumby.value = props.display === "never" ? false : ((_a = barContainerRef.value) == null ? void 0 : _a.offsetHeight) < ((_b = barContainerRef.value) == null ? void 0 : _b.scrollHeight);
      hasThumbx.value = props.display === "never" ? false : ((_c = barContainerRef.value) == null ? void 0 : _c.offsetWidth) < ((_d = barContainerRef.value) == null ? void 0 : _d.scrollWidth);
    }
    const thumbyStyle = vue.computed(() => {
      return {
        "--cu-scrollbar-barheight": Math.max(minBarSize, barHeight.value) + "px",
        "--cu-scrollbar-bartop": barTop.value + "px"
      };
    });
    const thumbxStyle = vue.computed(() => {
      return {
        "--cu-scrollbar-barwidth": Math.max(minBarSize, barWidth.value) + "px",
        "--cu-scrollbar-barleft": barLeft.value + "px"
      };
    });
    function onScroll(e) {
      const eTarget = e.target;
      barTop.value = eTarget.scrollTop / eTarget.scrollHeight * eTarget.offsetHeight;
      barLeft.value = eTarget.scrollLeft / eTarget.scrollWidth * eTarget.offsetWidth;
      if (barHeight.value < minBarSize) {
        barTop.value = barTop.value - (minBarSize - barHeight.value) / eTarget.offsetHeight * barTop.value;
      }
      if (barWidth.value < minBarSize) {
        barLeft.value = barLeft.value - (minBarSize - barWidth.value) / eTarget.offsetWidth * barLeft.value;
      }
      emit("scroll", e);
    }
    function mousedowny(e) {
      e.preventDefault();
      setTop(e.offsetY);
      clearMoveY = core.useEventListener(document, "mousemove", movey);
      clearUp = core.useEventListener(document, "mouseup", up);
    }
    function mousedownx(e) {
      e.preventDefault();
      setLeft(e.offsetX);
      clearMoveX = core.useEventListener(document, "mousemove", movex);
      clearUp = core.useEventListener(document, "mouseup", up);
    }
    function movey(e) {
      let offsetTop = barContainerRef.value.getBoundingClientRect().top;
      setTop(e.clientY - offsetTop);
    }
    function movex(e) {
      let offsetLeft = barContainerRef.value.getBoundingClientRect().left;
      setLeft(e.clientX - offsetLeft);
    }
    function setTop(offsetY) {
      var _a, _b, _c, _d;
      let top = offsetY / ((_a = barContainerRef.value) == null ? void 0 : _a.offsetHeight) * ((_b = barContainerRef.value) == null ? void 0 : _b.scrollHeight);
      top -= barHeight.value / 2 / ((_c = barContainerRef.value) == null ? void 0 : _c.offsetHeight) * ((_d = barContainerRef.value) == null ? void 0 : _d.scrollHeight);
      barContainerRef.value.scrollTo({
        top
      });
    }
    function setLeft(offsetX) {
      var _a, _b, _c, _d;
      let left = offsetX / ((_a = barContainerRef.value) == null ? void 0 : _a.offsetWidth) * ((_b = barContainerRef.value) == null ? void 0 : _b.scrollWidth);
      left -= barWidth.value / 2 / ((_c = barContainerRef.value) == null ? void 0 : _c.offsetWidth) * ((_d = barContainerRef.value) == null ? void 0 : _d.scrollWidth);
      barContainerRef.value.scrollTo({
        left
      });
    }
    function up() {
      clearMoveX == null ? void 0 : clearMoveX();
      clearMoveY == null ? void 0 : clearMoveY();
      clearUp == null ? void 0 : clearUp();
    }
    async function resateScrollBar() {
      await vue.nextTick();
      const dom = barContainerRef.value;
      if (!dom)
        return;
      barHeight.value = dom.offsetHeight / dom.scrollHeight * dom.offsetHeight;
      barWidth.value = dom.offsetWidth / dom.scrollWidth * dom.offsetWidth;
      barTop.value = dom.scrollTop / dom.scrollHeight * dom.offsetHeight;
      barLeft.value = dom.scrollLeft / dom.scrollWidth * dom.offsetWidth;
      if (barHeight.value < minBarSize) {
        barTop.value = barTop.value - (minBarSize - barHeight.value) / dom.offsetHeight * barTop.value;
      }
      if (barWidth.value < minBarSize) {
        barLeft.value = barLeft.value - (minBarSize - barWidth.value) / dom.offsetWidth * barLeft.value;
      }
      computedShowThumb();
    }
    function setBarTop(top, beh) {
      barContainerRef.value.scrollTo({
        top,
        behavior: beh ?? "smooth"
      });
    }
    function setBarLeft(left, beh) {
      barContainerRef.value.scrollTo({
        left,
        behavior: beh ?? "smooth"
      });
    }
    function getScrollEvent() {
      return barContainerRef.value;
    }
    __expose({ setBarTop, setBarLeft, getScrollEvent, hasThumby, hasThumbx });
    vue.onMounted(() => {
      resateScrollBar();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-scrollbar", _ctx.display]),
        style: vue.normalizeStyle({ height: _ctx.height })
      }, [
        vue.createElementVNode("div", {
          class: "cu-scrollbar__container",
          style: vue.normalizeStyle({ "max-height": _ctx.maxHeight }),
          ref_key: "barContainerRef",
          ref: barContainerRef,
          onScroll
        }, [
          vue.createElementVNode("div", {
            ref_key: "containerDivRef",
            ref: containerDivRef
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 512)
        ], 36),
        hasThumby.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "cu-scrollbar__thumb thumby",
          style: vue.normalizeStyle(thumbyStyle.value),
          onMousedown: mousedowny
        }, null, 36)) : vue.createCommentVNode("", true),
        hasThumbx.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "cu-scrollbar__thumb thumbx",
          style: vue.normalizeStyle(thumbxStyle.value),
          onMousedown: mousedownx
        }, null, 36)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
