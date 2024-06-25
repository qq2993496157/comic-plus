"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/anchor.css");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
const scroll = require("../utils/scroll.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAnchor"
  },
  __name: "main",
  props: main_props.anchorProps,
  emits: main_props.anchorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { SIZE } = config.useConfig();
    const currentHref = vue.ref("");
    const links = {};
    const currentLinkEl = vue.ref(null);
    const containerEl = vue.ref(null);
    const anchorRef = vue.ref(null);
    var hashChangeFlag = false;
    var rolling = false;
    const debonceScroll = tools.debounce(onScroll);
    const anchorStyle = vue.computed(() => {
      return {
        "--cu-anchor-line-weight": props.lineWeight ? props.lineWeight + "px" : void 0,
        "--cu-anchor-color": props.color
      };
    });
    const top = vue.computed(() => {
      var _a;
      return ((_a = currentLinkEl.value) == null ? void 0 : _a.offsetTop) ?? 0;
    });
    const left = vue.computed(() => {
      var _a;
      return ((_a = currentLinkEl.value) == null ? void 0 : _a.offsetLeft) ?? 0;
    });
    const lineStyle = vue.computed(() => {
      var _a;
      if (props.direction === "vertical") {
        return {
          top: top.value + "px",
          opacity: currentHref.value ? 1 : 0
        };
      } else if (props.direction === "horizontal") {
        return {
          left: left.value + 4 + "px",
          width: ((_a = currentLinkEl.value) == null ? void 0 : _a.offsetWidth) - 8 + "px",
          opacity: currentHref.value ? 1 : 0
        };
      } else {
        return void 0;
      }
    });
    function handleClick(href) {
      if (!href)
        return;
      hashChangeFlag = true;
      setCurrentAnchor(href);
      scrollTo(href);
    }
    function setCurrentAnchor(href) {
      if (currentHref.value === href)
        return;
      currentHref.value = href;
      currentLinkEl.value = anchorRef.value.querySelector(`a[data-href="${href}"]`);
      emit("change", href);
    }
    function onScroll() {
      if (!rolling) {
        let current = getCurrentAnchor();
        currentHref.value = current;
        currentLinkEl.value = anchorRef.value.querySelector(`a[data-href="${current}"]`);
      }
      rolling = false;
      hashChangeFlag = false;
    }
    function getCurrentAnchor() {
      if (!containerEl.value)
        return;
      let eleTopList = Object.keys(links).map((v) => {
        let ele = getElement(v);
        if (ele) {
          return {
            href: v,
            top: ele.getBoundingClientRect().top - getContainerOffsetTop()
          };
        }
      }).filter(Boolean);
      eleTopList.sort((prev, next) => prev.top - next.top);
      for (let i = eleTopList.length - 1; i >= 0; i--) {
        let item = eleTopList[i];
        if (item.top - props.offset <= 0) {
          return item.href;
        }
      }
      return void 0;
    }
    let clearAnimate = null;
    function scrollTo(id) {
      let el = document.querySelector(id);
      if (el) {
        if (clearAnimate)
          clearAnimate();
        rolling = true;
        let from = getContainerScrollTop();
        let to = el.getBoundingClientRect().top - getContainerOffsetTop() + from - props.offset;
        clearAnimate = scroll.animateScrollTo(containerEl.value, from, to, props.duration);
      }
    }
    function getContainerScrollTop() {
      if (containerEl.value === window) {
        return window.scrollY;
      }
      return containerEl.value.scrollTop;
    }
    function getElement(target) {
      if (typescript.isString(target)) {
        try {
          return document.querySelector(target);
        } catch {
          return null;
        }
      }
      return target;
    }
    function getContainer() {
      const el = getElement(props.container);
      if (!el || el === window) {
        containerEl.value = window;
      } else {
        containerEl.value = el;
      }
    }
    function getContainerOffsetTop() {
      let pTop = 0;
      try {
        pTop = containerEl.value.getBoundingClientRect().top;
      } catch {
      }
      return pTop;
    }
    function addLinkItem(item) {
      if (!item.href)
        return;
      links[item.href] = item;
    }
    function removeLinkItem(href) {
      delete links[href];
      if (currentHref.value === href) {
        currentHref.value = "";
      }
    }
    function hashChange() {
      if (!hashChangeFlag) {
        const hash = decodeURIComponent(window.location.hash);
        handleClick(hash);
      }
    }
    core.useEventListener(containerEl, "scroll", debonceScroll);
    core.useEventListener(window, "hashchange", hashChange);
    vue.watch(
      () => props.container,
      () => {
        getContainer();
      }
    );
    vue.onMounted(() => {
      getContainer();
      const hash = decodeURIComponent(window.location.hash);
      let target = getElement(hash);
      if (target) {
        handleClick(hash);
      } else {
        onScroll();
      }
    });
    vue.provide(type.ANCHOR_PROVIDE, {
      props,
      currentHref,
      addLinkItem,
      removeLinkItem,
      handleClick
    });
    __expose({
      changeAnchor: handleClick
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("ul", {
        class: vue.normalizeClass(["cu-anchor", [{ "show-line": _ctx.showLine }, _ctx.size ?? vue.unref(SIZE), "cu-anchor--" + _ctx.direction]]),
        ref_key: "anchorRef",
        ref: anchorRef,
        style: vue.normalizeStyle(anchorStyle.value)
      }, [
        vue.createElementVNode("span", {
          class: "cu-anchor__line",
          style: vue.normalizeStyle(lineStyle.value)
        }, null, 4),
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
exports.default = _sfc_main;
