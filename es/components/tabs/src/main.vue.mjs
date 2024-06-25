import { defineComponent, ref, reactive, watch, nextTick, onMounted, provide, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, Fragment, renderList, createBlock, resolveDynamicComponent, createTextVNode, toDisplayString, withModifiers, renderSlot } from "vue";
import "../style/tab.css";
import { tabsProps, tabsEmits } from "./main.props.mjs";
import { TABS_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-tabs__header" };
const _hoisted_2 = { class: "cu-tabs__head" };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-left" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-right" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = ["tab-nav", "onClick"];
const _hoisted_8 = {
  key: 0,
  class: "cu-tabs__label"
};
const _hoisted_9 = {
  key: 1,
  class: "cu-tabs__label"
};
const _hoisted_10 = {
  key: 2,
  class: "cu-tabs__closable"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 3,
  class: "cu-tabs__circle",
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  fill: "none"
};
const _hoisted_13 = /* @__PURE__ */ createElementVNode("path", { d: "M1 6M1 6Q2.01789 6 2.94593 5.60747Q3.84305 5.22803 4.53562 4.53554Q5.22803 3.84305 5.60747 2.94593Q6 2.01789 6 1Q6 0.901509 6.01921 0.80491Q6.03843 0.708311 6.07612 0.617317Q6.11381 0.526323 6.16853 0.44443Q6.22325 0.362537 6.29289 0.292893Q6.36254 0.223249 6.44443 0.16853Q6.52632 0.113812 6.61732 0.0761205Q6.70831 0.0384295 6.80491 0.0192147Q6.90151 0 7 0Q7.09849 0 7.19509 0.0192147Q7.29169 0.0384295 7.38268 0.0761205Q7.47368 0.113812 7.55557 0.16853Q7.63746 0.223249 7.70711 0.292893Q7.77675 0.362537 7.83147 0.44443Q7.88619 0.526323 7.92388 0.617317Q7.96157 0.708311 7.98078 0.80491Q8 0.901509 8 1Q8 2.42346 7.44949 3.72503Q6.9181 4.98137 5.94975 5.94983Q4.98137 6.91811 3.72503 7.44949Q2.42346 8 1 8Q0.901509 8 0.80491 7.98078Q0.708311 7.96157 0.617316 7.92388Q0.526322 7.88619 0.44443 7.83147Q0.362537 7.77675 0.292893 7.70711Q0.223249 7.63746 0.16853 7.55557Q0.113811 7.47368 0.0761205 7.38268Q0.0384294 7.29169 0.0192147 7.19509Q0 7.09849 0 7Q0 6.90151 0.0192147 6.80491Q0.0384294 6.70831 0.0761205 6.61732Q0.113811 6.52632 0.16853 6.44443Q0.223249 6.36254 0.292893 6.29289Q0.362537 6.22325 0.44443 6.16853Q0.526322 6.11381 0.617316 6.07612Q0.708311 6.03843 0.80491 6.01921Q0.901509 6 1 6Z" }, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "cu-tabs__header-extra" };
const _hoisted_16 = { class: "cu-tabs__container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTabs"
  },
  __name: "main",
  props: tabsProps,
  emits: tabsEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tabListRef = ref(null);
    const tabScrollRef = ref(null);
    const cardLineStyle = reactive({});
    const tabList = ref([]);
    const hasScroll = ref(false);
    function setCardLineStyle(name) {
      var _a;
      if (props.type !== "card")
        return;
      let dom = (_a = tabListRef.value) == null ? void 0 : _a.querySelector(`span[tab-nav="${name}"]`);
      if (!dom)
        return;
      cardLineStyle.width = dom.offsetWidth + "px";
      cardLineStyle.height = dom.offsetHeight + "px";
      cardLineStyle.left = dom.offsetLeft + "px";
    }
    function navClick(name) {
      _scrollIntoView(name);
      emit("update:modelValue", name);
      emit("change", name);
    }
    function _scrollIntoView(name) {
      var _a;
      let dom = (_a = tabListRef.value) == null ? void 0 : _a.querySelector(`span[tab-nav="${name}"]`);
      dom == null ? void 0 : dom.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    function addTab(pane) {
      let idx = tabList.value.findIndex((v) => v.name === pane.name);
      if (idx >= 0) {
        tabList.value.splice(idx, 1);
      }
      tabList.value.push(pane);
    }
    function removeTab(name) {
      let idx = tabList.value.findIndex((v) => v.name === name);
      if (idx >= 0) {
        tabList.value.splice(idx, 1);
      }
    }
    function scrollTo(value) {
      let scrollLeft = tabScrollRef.value.scrollLeft + tabScrollRef.value.offsetWidth * value;
      tabScrollRef.value.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
    watch(
      () => tabList.value.length,
      () => {
        nextTick(() => {
          var _a, _b;
          hasScroll.value = ((_a = tabScrollRef.value) == null ? void 0 : _a.offsetWidth) < ((_b = tabScrollRef.value) == null ? void 0 : _b.scrollWidth);
        });
      }
    );
    watch(
      () => props.modelValue,
      (val) => {
        nextTick(() => {
          setCardLineStyle(val.toString());
          _scrollIntoView(val.toString());
        });
      }
    );
    watch(
      () => props.type,
      (val) => {
        if (val === "card") {
          nextTick(() => {
            setCardLineStyle(props.modelValue.toString());
          });
        }
      }
    );
    onMounted(() => {
      nextTick(() => {
        setCardLineStyle(props.modelValue.toString());
      });
    });
    provide(TABS_PROVIDE, {
      props,
      addTab,
      removeTab
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-tabs", [_ctx.type ? "is-" + _ctx.type : void 0, { "is-only-tab": _ctx.onlyTab }, { "has-scroll": hasScroll.value }]]),
        style: normalizeStyle({ "--cu-tabs-color": _ctx.color })
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            hasScroll.value ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "cu-tabs__button left-button",
              onClick: _cache[0] || (_cache[0] = ($event) => scrollTo(-1))
            }, _hoisted_4)) : createCommentVNode("", true),
            hasScroll.value ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: "cu-tabs__button right-button",
              onClick: _cache[1] || (_cache[1] = ($event) => scrollTo(1))
            }, _hoisted_6)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: "cu-tabs__scroll",
              ref_key: "tabScrollRef",
              ref: tabScrollRef
            }, [
              createElementVNode("div", {
                class: "cu-tabs__list",
                ref_key: "tabListRef",
                ref: tabListRef
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(tabList.value, (nav) => {
                  return openBlock(), createElementBlock("span", {
                    class: normalizeClass(["cu-tabs__item", { "is-active": _ctx.modelValue === nav.name }]),
                    "tab-nav": nav.name,
                    onClick: ($event) => navClick(nav.name)
                  }, [
                    nav.slots ? (openBlock(), createElementBlock("span", _hoisted_8, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(nav.slots, (item) => {
                        return openBlock(), createBlock(resolveDynamicComponent(item));
                      }), 256))
                    ])) : (openBlock(), createElementBlock("span", _hoisted_9, [
                      nav.icon ? (openBlock(), createElementBlock("i", {
                        key: 0,
                        class: normalizeClass([nav.icon, "cu-tabs__icon"])
                      }, null, 2)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(nav.label), 1)
                    ])),
                    _ctx.closable ? (openBlock(), createElementBlock("span", _hoisted_10, [
                      createElementVNode("i", {
                        class: "cu-icon-close-small",
                        onClick: withModifiers(($event) => emit("tab-remove", nav.name), ["stop"])
                      }, null, 8, _hoisted_11)
                    ])) : createCommentVNode("", true),
                    _ctx.type === "circle" ? (openBlock(), createElementBlock("svg", _hoisted_12, _hoisted_14)) : createCommentVNode("", true)
                  ], 10, _hoisted_7);
                }), 256)),
                _ctx.type === "card" ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "cu-tabs__cardline",
                  style: normalizeStyle(cardLineStyle)
                }, null, 4)) : createCommentVNode("", true)
              ], 512)
            ], 512)
          ]),
          createElementVNode("div", _hoisted_15, [
            renderSlot(_ctx.$slots, "extra")
          ])
        ]),
        createElementVNode("div", _hoisted_16, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
