"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/carousel.css");
const type = require("./type.js");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-carousel__tools" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCarousel"
  },
  __name: "main",
  props: main_props.carouselProps,
  emits: main_props.carouselEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const active = vue.ref(0);
    const flag = vue.ref(true);
    const interval = vue.ref(0);
    const itemKeyList = vue.ref([]);
    const carouselStyle = vue.computed(() => {
      return {
        height: props.height
      };
    });
    const transitionName = vue.computed(() => {
      if (props.mode === "transform") {
        return "transform_" + props.direction + "_" + (flag.value ? "nex" : "pre");
      }
      return props.mode;
    });
    function start() {
      stop();
      interval.value = setInterval(() => {
        changeActive(1);
      }, props.delay);
    }
    function stop() {
      clearInterval(interval.value);
      interval.value = 0;
    }
    function mouseenter() {
      if (!props.autoPlay)
        return false;
      props.pauseOnHover && stop();
    }
    function mouseleave() {
      if (!props.autoPlay)
        return false;
      start();
    }
    function changeActive(val) {
      flag.value = val >= 0;
      active.value += val;
      active.value = active.value >= itemKeyList.value.length ? 0 : active.value < 0 ? itemKeyList.value.length - 1 : active.value;
      emit("change", active.value);
    }
    function next() {
      changeActive(1);
    }
    function prev() {
      changeActive(-1);
    }
    function setActiveIndex(num) {
      num = num >= itemKeyList.value.length ? itemKeyList.value.length : num < 0 ? 0 : num;
      if (num == active.value)
        return;
      flag.value = num > active.value;
      active.value = num;
      emit("change", active.value);
    }
    function dotClick(dot) {
      if (props.arrow === "never")
        return;
      let index = itemKeyList.value.findIndex((v) => v === dot);
      flag.value = index >= active.value;
      active.value = index;
      emit("change", active.value);
    }
    function addItem(uid) {
      itemKeyList.value.push(uid);
    }
    function removeItem(uid) {
      itemKeyList.value.splice(
        itemKeyList.value.findIndex((id) => id === uid),
        1
      );
    }
    const current = vue.computed(() => {
      return itemKeyList.value[active.value];
    });
    vue.provide(type.CAROUSEL_PROVIDE, {
      addItem,
      removeItem,
      current
    });
    __expose({
      next,
      prev,
      setActiveIndex
    });
    vue.onMounted(() => {
      if (typescript.isNumber(props.defaultIndex) && props.defaultIndex >= 0 && props.defaultIndex < itemKeyList.value.length) {
        active.value = props.defaultIndex || 0;
        emit("change", active.value);
      }
      props.autoPlay && start();
    });
    vue.onBeforeUnmount(() => {
      stop();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-carousel", [_ctx.direction ? "is-" + _ctx.direction : void 0]]),
        onMouseenter: mouseenter,
        onMouseleave: mouseleave
      }, [
        vue.createElementVNode("div", {
          class: "cu-carousel__container",
          style: vue.normalizeStyle(carouselStyle.value)
        }, [
          vue.createVNode(vue.TransitionGroup, { name: transitionName.value }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["name"])
        ], 4),
        vue.createElementVNode("div", _hoisted_1, [
          _ctx.arrow != "never" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(["cu-carousel__buttons", _ctx.arrow])
          }, [
            _ctx.direction === "horizontal" ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: "cu-icon-left left",
              onClick: _cache[0] || (_cache[0] = ($event) => changeActive(-1))
            })) : vue.createCommentVNode("", true),
            _ctx.direction === "horizontal" ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 1,
              class: "cu-icon-right right",
              onClick: _cache[1] || (_cache[1] = ($event) => changeActive(1))
            })) : vue.createCommentVNode("", true),
            _ctx.direction === "vertical" ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 2,
              class: "cu-icon-up top",
              onClick: _cache[2] || (_cache[2] = ($event) => changeActive(-1))
            })) : vue.createCommentVNode("", true),
            _ctx.direction === "vertical" ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 3,
              class: "cu-icon-down bottom",
              onClick: _cache[3] || (_cache[3] = ($event) => changeActive(1))
            })) : vue.createCommentVNode("", true)
          ], 2)) : vue.createCommentVNode("", true),
          _ctx.showIndicator ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: vue.normalizeClass(["cu-carousel__indicator", _ctx.arrow])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(itemKeyList.value, (dot) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                key: dot,
                onClick: ($event) => dotClick(dot),
                class: vue.normalizeClass({ active: current.value === dot })
              }, null, 10, _hoisted_2);
            }), 128))
          ], 2)) : vue.createCommentVNode("", true)
        ])
      ], 34);
    };
  }
});
exports.default = _sfc_main;
