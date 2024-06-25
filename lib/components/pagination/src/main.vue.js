"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/pagination.css");
const index = require("../../select/index.js");
const index$1 = require("../../option/index.js");
const index$2 = require("../../input/index.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-pagination__container" };
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-more" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-double-left" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-more" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-double-right" }, null, -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuPagination"
  },
  __name: "main",
  props: main_props.paginationProps,
  emits: main_props.paginationEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const LAST_VALUE = vue.computed(() => {
      return Math.ceil(props.total / currentPageSize.value);
    });
    const currentPageRef = vue.ref(props.currentPage);
    const showPrevMore = vue.ref(false);
    const showNextMore = vue.ref(false);
    const currentPageSize = vue.ref(props.pageSize);
    vue.watch(
      () => props.pageSize,
      (val) => {
        currentPageSize.value = val;
      }
    );
    vue.watch(
      () => props.currentPage,
      (val) => {
        currentPageRef.value = val;
      }
    );
    const pager = vue.computed(() => {
      const current = currentPageRef.value;
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const pageCount = LAST_VALUE.value;
      if (pageCount > pagerCount) {
        showPrevMore.value = current > pagerCount - halfPagerCount;
        showNextMore.value = current < pageCount - halfPagerCount;
      } else {
        showPrevMore.value = false;
        showNextMore.value = false;
      }
      const array = [];
      if (showPrevMore.value && !showNextMore.value) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore.value && showNextMore.value) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore.value && showNextMore.value) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = current - offset; i <= current + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    vue.watch(
      () => currentPageRef.value,
      (val) => {
        if (val <= 0) {
          currentPageRef.value = 1;
        } else if (val > LAST_VALUE.value) {
          currentPageRef.value = LAST_VALUE.value;
        }
        emit("update:currentPage", Number(val));
        emit("current-change", Number(val));
      }
    );
    function changeSelect() {
      emit("size-change", currentPageSize.value);
      emit("update:pageSize", currentPageSize.value);
    }
    function pagesHandleClick(num) {
      currentPageRef.value = num;
    }
    function pagesPrev() {
      currentPageRef.value--;
    }
    function pagesNext() {
      currentPageRef.value++;
    }
    function jumpPage(num) {
      if (currentPageRef.value + num >= LAST_VALUE.value) {
        currentPageRef.value = LAST_VALUE.value - 1;
      } else if (currentPageRef.value + num <= 1) {
        currentPageRef.value = 2;
      } else {
        currentPageRef.value += num;
      }
    }
    function change(e) {
      let num = Number(e.target.value);
      if (num >= LAST_VALUE.value) {
        currentPageRef.value = LAST_VALUE.value;
      } else if (num <= 1) {
        currentPageRef.value = 1;
      } else {
        currentPageRef.value = num;
      }
      e.target.value = currentPageRef.value.toString();
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-pagination", [{ "is-background": _ctx.background }, _ctx.size]])
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.layout, (name) => {
            var _a;
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass("cu-pagination__" + name)
            }, [
              name === "total" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(vue.toDisplayString(`共${_ctx.total}条`), 1)
              ], 64)) : name === "sizes" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                ((_a = _ctx.pageSizes) == null ? void 0 : _a.length) > 0 ? (vue.openBlock(), vue.createBlock(vue.unref(index.CuSelect), {
                  key: 0,
                  modelValue: currentPageSize.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentPageSize.value = $event),
                  onChange: changeSelect,
                  style: { "width": "100px" },
                  size: _ctx.size
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pageSizes, (item) => {
                      return vue.openBlock(), vue.createBlock(vue.unref(index$1.CuOption), {
                        label: item + "条/页",
                        value: item
                      }, null, 8, ["label", "value"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["modelValue", "size"])) : vue.createCommentVNode("", true)
              ], 64)) : name === "pages" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(["cu-icon-left button", { disabled: currentPageRef.value <= 1 }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => pagesPrev())
                }, null, 2),
                vue.createElementVNode("span", {
                  class: vue.normalizeClass({ current: currentPageRef.value === 1 }),
                  onClick: _cache[2] || (_cache[2] = ($event) => pagesHandleClick(1))
                }, "1", 2),
                showPrevMore.value ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "more button",
                  onClick: _cache[3] || (_cache[3] = ($event) => jumpPage(-5))
                }, _hoisted_4)) : vue.createCommentVNode("", true),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(pager.value, (num) => {
                  return vue.openBlock(), vue.createElementBlock("span", {
                    class: vue.normalizeClass({ current: num === currentPageRef.value }),
                    onClick: ($event) => pagesHandleClick(num)
                  }, vue.toDisplayString(num), 11, _hoisted_5);
                }), 256)),
                showNextMore.value ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 1,
                  class: "more button",
                  onClick: _cache[4] || (_cache[4] = ($event) => jumpPage(5))
                }, _hoisted_8)) : vue.createCommentVNode("", true),
                LAST_VALUE.value > 1 ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 2,
                  class: vue.normalizeClass({ current: currentPageRef.value === LAST_VALUE.value }),
                  onClick: _cache[5] || (_cache[5] = ($event) => pagesHandleClick(LAST_VALUE.value))
                }, vue.toDisplayString(LAST_VALUE.value), 3)) : vue.createCommentVNode("", true),
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(["cu-icon-right button", { disabled: currentPageRef.value >= LAST_VALUE.value }]),
                  onClick: _cache[6] || (_cache[6] = ($event) => pagesNext())
                }, null, 2)
              ], 64)) : name === "jumper" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
                vue.createTextVNode(" 跳转至"),
                vue.createVNode(vue.unref(index$2.CuInput), {
                  type: "number",
                  "model-value": currentPageRef.value,
                  onBlur: change,
                  onKeyup: vue.withKeys(change, ["enter"]),
                  style: { "width": "50px", "margin": "0 4px" },
                  size: _ctx.size
                }, null, 8, ["model-value", "size"]),
                vue.createTextVNode("页 ")
              ], 64)) : vue.createCommentVNode("", true)
            ], 2);
          }), 256))
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
