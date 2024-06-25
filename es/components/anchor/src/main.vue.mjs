import { defineComponent, ref, computed, watch, onMounted, provide, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { useEventListener } from "@vueuse/core";
import "../style/anchor.css";
import { isString } from "../../../utils/typescript.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { debounce } from "../../../utils/tools.mjs";
import { animateScrollTo } from "../utils/scroll.mjs";
import { anchorProps, anchorEmits } from "./main.props.mjs";
import { ANCHOR_PROVIDE } from "./type.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAnchor"
  },
  __name: "main",
  props: anchorProps,
  emits: anchorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { SIZE } = useConfig();
    const currentHref = ref("");
    const links = {};
    const currentLinkEl = ref(null);
    const containerEl = ref(null);
    const anchorRef = ref(null);
    var hashChangeFlag = false;
    var rolling = false;
    const debonceScroll = debounce(onScroll);
    const anchorStyle = computed(() => {
      return {
        "--cu-anchor-line-weight": props.lineWeight ? props.lineWeight + "px" : void 0,
        "--cu-anchor-color": props.color
      };
    });
    const top = computed(() => {
      var _a;
      return ((_a = currentLinkEl.value) == null ? void 0 : _a.offsetTop) ?? 0;
    });
    const left = computed(() => {
      var _a;
      return ((_a = currentLinkEl.value) == null ? void 0 : _a.offsetLeft) ?? 0;
    });
    const lineStyle = computed(() => {
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
        clearAnimate = animateScrollTo(containerEl.value, from, to, props.duration);
      }
    }
    function getContainerScrollTop() {
      if (containerEl.value === window) {
        return window.scrollY;
      }
      return containerEl.value.scrollTop;
    }
    function getElement(target) {
      if (isString(target)) {
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
    useEventListener(containerEl, "scroll", debonceScroll);
    useEventListener(window, "hashchange", hashChange);
    watch(
      () => props.container,
      () => {
        getContainer();
      }
    );
    onMounted(() => {
      getContainer();
      const hash = decodeURIComponent(window.location.hash);
      let target = getElement(hash);
      if (target) {
        handleClick(hash);
      } else {
        onScroll();
      }
    });
    provide(ANCHOR_PROVIDE, {
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
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["cu-anchor", [{ "show-line": _ctx.showLine }, _ctx.size ?? unref(SIZE), "cu-anchor--" + _ctx.direction]]),
        ref_key: "anchorRef",
        ref: anchorRef,
        style: normalizeStyle(anchorStyle.value)
      }, [
        createElementVNode("span", {
          class: "cu-anchor__line",
          style: normalizeStyle(lineStyle.value)
        }, null, 4),
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
