import { defineComponent, ref, watch, reactive, computed, provide, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, createCommentVNode, Fragment, renderList, createVNode, renderSlot, createTextVNode, toDisplayString, createBlock, createSlots, withCtx } from "vue";
import { useElementSize } from "@vueuse/core";
import { useConfig } from "../../../utils/config.mjs";
import { flattenArray, deepEqual } from "../../../utils/tools.mjs";
import "../style/table.css";
import _sfc_main$1 from "./components/table-row.vue.mjs";
import { CuCheckbox } from "../../checkbox/index.mjs";
import { CuEmpty } from "../../empty/index.mjs";
import { tableProps, tableEmits } from "./main.props.mjs";
import { TABLE_PROVIDE } from "./type.mjs";
const _hoisted_1 = {
  key: 0,
  style: { "width": "40px", "min-width": "40px" }
};
const _hoisted_2 = {
  key: 1,
  class: "cu-table__th fixed-right"
};
const _hoisted_3 = {
  key: 0,
  class: "cu-table__empty"
};
const _hoisted_4 = {
  key: 0,
  style: { "width": "40px", "min-width": "40px" }
};
const MIN_SIZE = 120;
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTable"
  },
  __name: "main",
  props: tableProps,
  emits: tableEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { SIZE } = useConfig();
    const tableRef = ref(null);
    const tableHeadRef = ref(null);
    const tableBodyRef = ref(null);
    const { width: tWidth, height: tHeight } = useElementSize(tableRef);
    watch([tWidth, tHeight], (val) => {
      getResize({
        width: val[0],
        height: val[1]
      });
    });
    const tableResize = reactive({
      width: 0,
      height: 0,
      flexWidth: 0,
      leftShadow: false,
      rightShadow: false,
      scrollWidth: 0
    });
    const checkList = ref([]);
    watch(
      () => props.data,
      () => {
        checkList.value.splice(0);
      }
    );
    watch(checkList.value, (val) => {
      emit("select-change", val);
    });
    const provideTreeProps = reactive(Object.assign({ children: "children" }, props.treeProps));
    const canSelectionDatas = ref(flattenArray(props.data, provideTreeProps.children));
    function addOption(arr) {
      canSelectionDatas.value.push(...arr);
    }
    const isTableTree = computed(() => {
      return props.data.filter((v) => {
        return !!v[provideTreeProps.children ?? "children"] || v[provideTreeProps.hasChildren];
      }).length > 0;
    });
    const stripeStyle = computed(() => {
      var _a;
      if (!((_a = props.options) == null ? void 0 : _a.stripe))
        return [];
      let s = props.options.bodyStyle;
      if (props.options.stripeColors) {
        return [props.options.stripeColors[0] ?? "#fff", props.options.stripeColors[1] ?? "#fafafa"];
      } else {
        return ["#fff", (s == null ? void 0 : s.backgroundColor) ?? "#fafafa"];
      }
    });
    const columns = computed(() => {
      var _a;
      let column = ((_a = props.options) == null ? void 0 : _a.column) ?? [];
      column = column.sort((a, b) => {
        if (a.fixed === "left" && (!b.fixed || b.fixed !== "left")) {
          return -1;
        } else if (b.fixed === "left" && (!a.fixed || a.fixed !== "left")) {
          return 1;
        } else if (a.fixed === "right" && b.fixed !== "right") {
          return 1;
        } else if (b.fixed === "right" && a.fixed !== "right") {
          return -1;
        } else {
          return 0;
        }
      });
      return column;
    });
    const indeterminate = computed(() => {
      var _a;
      if (!((_a = props.options) == null ? void 0 : _a.selection))
        return false;
      return checkList.value.length > 0 && checkList.value.length < canSelectionDatas.value.length;
    });
    const isCheckAll = computed(() => {
      var _a;
      if (!((_a = props.options) == null ? void 0 : _a.selection))
        return false;
      return checkList.value.length === canSelectionDatas.value.length;
    });
    const getStickyIndex = computed(() => {
      var _a;
      return {
        left: findLastObjectWithProperty(),
        right: (_a = columns.value) == null ? void 0 : _a.findIndex((v) => v.fixed === "right")
      };
    });
    function findLastObjectWithProperty() {
      var _a, _b;
      for (let i = ((_a = columns.value) == null ? void 0 : _a.length) - 1; i >= 0; i--) {
        let item = (_b = columns.value) == null ? void 0 : _b[i];
        if ((item == null ? void 0 : item.fixed) === "left") {
          return i;
        }
      }
      return -1;
    }
    function styles(css, index, offset) {
      let obj = {};
      obj["text-align"] = css.align;
      if (css.fixed === "left") {
        obj.left = getStickyLeft(index) + "px";
      } else if (css.fixed === "right") {
        obj.right = getStickyRight(index) + (offset ?? 0) + "px";
      }
      return obj;
    }
    function getStickyLeft(index) {
      var _a, _b;
      let left = 0;
      if (index > 0) {
        for (let i = 0; i < index; i++) {
          let item = (_a = columns.value) == null ? void 0 : _a[i];
          left += (item == null ? void 0 : item.fixed) === "left" ? (item == null ? void 0 : item.width) || MIN_SIZE : 0;
        }
      }
      left += ((_b = props.options) == null ? void 0 : _b.selection) ? 40 : 0;
      return left;
    }
    function getStickyRight(index) {
      var _a, _b, _c;
      let right = 0;
      if (index < ((_a = columns.value) == null ? void 0 : _a.length) - 1) {
        for (let i = ((_b = columns.value) == null ? void 0 : _b.length) - 1; i > index; i--) {
          let item = (_c = columns.value) == null ? void 0 : _c[i];
          right += (item == null ? void 0 : item.fixed) === "right" ? (item == null ? void 0 : item.width) || MIN_SIZE : 0;
        }
      }
      return right;
    }
    function scroll(e) {
      tableResize.leftShadow = e.target.scrollLeft > 0;
      tableResize.rightShadow = e.target.scrollWidth - e.target.scrollLeft - e.target.offsetWidth > 0;
      tableHeadRef.value.scrollTo({
        left: e.target.scrollLeft
      });
    }
    function getResize(rect) {
      var _a, _b, _c;
      const { width, height } = rect;
      let e = tableBodyRef.value;
      tableResize.leftShadow = e.scrollLeft > 0;
      tableResize.rightShadow = e.scrollWidth - e.scrollLeft - e.offsetWidth != 0;
      tableResize.scrollWidth = e.offsetWidth - e.clientWidth;
      tableResize.width = width;
      tableResize.height = height;
      let length = ((_a = columns.value) == null ? void 0 : _a.filter((v) => !v.width).length) ?? 0;
      let allWidth = ((_b = columns.value) == null ? void 0 : _b.reduce((v, o) => v += Number(o.width) || 0, 0)) ?? 0;
      allWidth += ((_c = props.options) == null ? void 0 : _c.selection) ? 40 : 0;
      let w = (tableResize.width - tableResize.scrollWidth - allWidth) / length;
      tableResize.flexWidth = w <= MIN_SIZE ? MIN_SIZE : w;
    }
    function changeSelection(check, item) {
      if (check) {
        selectRow(item);
      } else {
        let idx = checkList.value.findIndex((v) => deepEqual(v, item));
        if (idx >= 0) {
          checkList.value.splice(idx, 1);
        }
      }
    }
    function _changeCheckAll(check) {
      clearSelection();
      if (check) {
        deepSelection(canSelectionDatas.value);
      }
    }
    function deepSelection(arr) {
      arr.forEach((row) => {
        if (row[provideTreeProps.children] && Array.isArray(row[provideTreeProps.children])) {
          deepSelection(row[provideTreeProps.children]);
        }
        checkList.value.push(row);
      });
    }
    function selectRow(row) {
      if (checkList.value.find((v) => v === row))
        return;
      row = [].concat(row);
      checkList.value.push(...row);
    }
    function clearSelection() {
      checkList.value.splice(0);
    }
    provide(TABLE_PROVIDE, {
      props,
      checkList,
      treeProps: provideTreeProps,
      changeSelection,
      addOption
    });
    __expose({ selectRow, clearSelection });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-table", [
          { "is-border": _ctx.options.border },
          { "show-left-shadow": tableResize.leftShadow },
          { "show-right-shadow": tableResize.rightShadow },
          { "is-selection": _ctx.options.selection },
          _ctx.size ?? unref(SIZE)
        ]]),
        ref_key: "tableRef",
        ref: tableRef
      }, [
        createElementVNode("div", {
          class: normalizeClass(["cu-table__head", _ctx.headerClassName]),
          ref_key: "tableHeadRef",
          ref: tableHeadRef
        }, [
          createElementVNode("table", {
            style: normalizeStyle({ width: tableResize.width - tableResize.scrollWidth + "px" })
          }, [
            createElementVNode("colgroup", null, [
              _ctx.options.selection ? (openBlock(), createElementBlock("col", _hoisted_1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (th, index) => {
                return openBlock(), createElementBlock("col", {
                  key: index,
                  style: normalizeStyle({
                    width: (th.width || tableResize.flexWidth) + "px",
                    minWidth: (th.width || tableResize.flexWidth) + "px"
                  })
                }, null, 4);
              }), 128)),
              createElementVNode("col", {
                style: normalizeStyle({ width: tableResize.scrollWidth + "px" })
              }, null, 4)
            ]),
            createElementVNode("thead", null, [
              createElementVNode("tr", {
                class: "cu-table__row",
                style: normalizeStyle(_ctx.options.headStyle)
              }, [
                _ctx.options.selection ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  class: normalizeClass(["cu-table__th checkbox fixed-left", { "fixed-shadow-left": getStickyIndex.value.left == -1 }]),
                  width: "40"
                }, [
                  createVNode(unref(CuCheckbox), {
                    "model-value": isCheckAll.value,
                    onChange: _changeCheckAll,
                    indeterminate: indeterminate.value
                  }, null, 8, ["model-value", "indeterminate"])
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (th, index) => {
                  return openBlock(), createElementBlock("th", {
                    class: normalizeClass(["cu-table__th", [
                      th.fixed ? "fixed-" + th.fixed : void 0,
                      { "fixed-shadow-left": getStickyIndex.value.left == index },
                      { "fixed-shadow-right": getStickyIndex.value.right == index }
                    ]]),
                    key: index,
                    style: normalizeStyle(styles(th, index, tableResize.scrollWidth))
                  }, [
                    createElementVNode("span", null, [
                      renderSlot(_ctx.$slots, "th-" + th.prop, {}, () => [
                        createTextVNode(toDisplayString(th.label), 1)
                      ])
                    ])
                  ], 6);
                }), 128)),
                tableResize.scrollWidth ? (openBlock(), createElementBlock("th", _hoisted_2)) : createCommentVNode("", true)
              ], 4)
            ])
          ], 4)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(["cu-table__body", [
            {
              "is-stripe": _ctx.options.stripe,
              "table-expand": isTableTree.value || _ctx.expand,
              "scrolly-body": tableResize.scrollWidth > 0
            },
            _ctx.bodyClassName
          ]]),
          ref_key: "tableBodyRef",
          ref: tableBodyRef,
          style: normalizeStyle({
            width: tableResize.width + "px",
            "max-height": _ctx.height,
            "--stripe-odd": stripeStyle.value[0] ?? void 0,
            "--stripe-even": stripeStyle.value[1] ?? void 0,
            ..._ctx.options.bodyStyle
          }),
          onScroll: scroll
        }, [
          _ctx.data.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "empty", {}, () => [
              createVNode(unref(CuEmpty), { description: "暂无数据" })
            ])
          ])) : (openBlock(), createElementBlock("table", {
            key: 1,
            style: normalizeStyle({ width: tableResize.width - tableResize.scrollWidth + "px" })
          }, [
            createElementVNode("colgroup", null, [
              _ctx.options.selection ? (openBlock(), createElementBlock("col", _hoisted_4)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (td, index) => {
                return openBlock(), createElementBlock("col", {
                  key: index,
                  style: normalizeStyle({
                    width: (td.width || tableResize.flexWidth) + "px",
                    minWidth: (td.width || tableResize.flexWidth) + "px"
                  })
                }, null, 4);
              }), 128))
            ]),
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
                return openBlock(), createBlock(_sfc_main$1, {
                  key: index,
                  row: item,
                  index
                }, createSlots({ _: 2 }, [
                  renderList(columns.value, (td) => {
                    return {
                      name: td.prop,
                      fn: withCtx(({ row }) => [
                        renderSlot(_ctx.$slots, td.prop, {
                          row,
                          index
                        })
                      ])
                    };
                  }),
                  _ctx.expand && _ctx.$slots.expand ? {
                    name: "expand",
                    fn: withCtx(({ row }) => [
                      renderSlot(_ctx.$slots, "expand", {
                        row,
                        index
                      })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["row", "index"]);
              }), 128))
            ])
          ], 4))
        ], 38)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
