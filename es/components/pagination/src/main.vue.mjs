import { defineComponent, computed, ref, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, createTextVNode, toDisplayString, createBlock, unref, withCtx, createCommentVNode, createVNode, withKeys } from "vue";
import "../style/pagination.css";
import { CuSelect } from "../../select/index.mjs";
import { CuOption } from "../../option/index.mjs";
import { CuInput } from "../../input/index.mjs";
import { paginationProps, paginationEmits } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-pagination__container" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-more" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-double-left" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-more" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-double-right" }, null, -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuPagination"
  },
  __name: "main",
  props: paginationProps,
  emits: paginationEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const LAST_VALUE = computed(() => {
      return Math.ceil(props.total / currentPageSize.value);
    });
    const currentPageRef = ref(props.currentPage);
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const currentPageSize = ref(props.pageSize);
    watch(
      () => props.pageSize,
      (val) => {
        currentPageSize.value = val;
      }
    );
    watch(
      () => props.currentPage,
      (val) => {
        currentPageRef.value = val;
      }
    );
    const pager = computed(() => {
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
    watch(
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-pagination", [{ "is-background": _ctx.background }, _ctx.size]])
      }, [
        createElementVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layout, (name) => {
            var _a;
            return openBlock(), createElementBlock("div", {
              class: normalizeClass("cu-pagination__" + name)
            }, [
              name === "total" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(`共${_ctx.total}条`), 1)
              ], 64)) : name === "sizes" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                ((_a = _ctx.pageSizes) == null ? void 0 : _a.length) > 0 ? (openBlock(), createBlock(unref(CuSelect), {
                  key: 0,
                  modelValue: currentPageSize.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentPageSize.value = $event),
                  onChange: changeSelect,
                  style: { "width": "100px" },
                  size: _ctx.size
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pageSizes, (item) => {
                      return openBlock(), createBlock(unref(CuOption), {
                        label: item + "条/页",
                        value: item
                      }, null, 8, ["label", "value"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["modelValue", "size"])) : createCommentVNode("", true)
              ], 64)) : name === "pages" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createElementVNode("span", {
                  class: normalizeClass(["cu-icon-left button", { disabled: currentPageRef.value <= 1 }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => pagesPrev())
                }, null, 2),
                createElementVNode("span", {
                  class: normalizeClass({ current: currentPageRef.value === 1 }),
                  onClick: _cache[2] || (_cache[2] = ($event) => pagesHandleClick(1))
                }, "1", 2),
                showPrevMore.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "more button",
                  onClick: _cache[3] || (_cache[3] = ($event) => jumpPage(-5))
                }, _hoisted_4)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(pager.value, (num) => {
                  return openBlock(), createElementBlock("span", {
                    class: normalizeClass({ current: num === currentPageRef.value }),
                    onClick: ($event) => pagesHandleClick(num)
                  }, toDisplayString(num), 11, _hoisted_5);
                }), 256)),
                showNextMore.value ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "more button",
                  onClick: _cache[4] || (_cache[4] = ($event) => jumpPage(5))
                }, _hoisted_8)) : createCommentVNode("", true),
                LAST_VALUE.value > 1 ? (openBlock(), createElementBlock("span", {
                  key: 2,
                  class: normalizeClass({ current: currentPageRef.value === LAST_VALUE.value }),
                  onClick: _cache[5] || (_cache[5] = ($event) => pagesHandleClick(LAST_VALUE.value))
                }, toDisplayString(LAST_VALUE.value), 3)) : createCommentVNode("", true),
                createElementVNode("span", {
                  class: normalizeClass(["cu-icon-right button", { disabled: currentPageRef.value >= LAST_VALUE.value }]),
                  onClick: _cache[6] || (_cache[6] = ($event) => pagesNext())
                }, null, 2)
              ], 64)) : name === "jumper" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createTextVNode(" 跳转至"),
                createVNode(unref(CuInput), {
                  type: "number",
                  "model-value": currentPageRef.value,
                  onBlur: change,
                  onKeyup: withKeys(change, ["enter"]),
                  style: { "width": "50px", "margin": "0 4px" },
                  size: _ctx.size
                }, null, 8, ["model-value", "size"]),
                createTextVNode("页 ")
              ], 64)) : createCommentVNode("", true)
            ], 2);
          }), 256))
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
