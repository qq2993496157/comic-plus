"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
const config = require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
require("../style/table.css");
const tableRow_vue_vue_type_script_setup_true_lang = require("./components/table-row.vue.js");
const index = require("../../checkbox/index.js");
const index$1 = require("../../empty/index.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTable"
  },
  __name: "main",
  props: main_props.tableProps,
  emits: main_props.tableEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { SIZE } = config.useConfig();
    const tableRef = vue.ref(null);
    const tableHeadRef = vue.ref(null);
    const tableBodyRef = vue.ref(null);
    const { width: tWidth, height: tHeight } = core.useElementSize(tableRef);
    vue.watch([tWidth, tHeight], (val) => {
      getResize({
        width: val[0],
        height: val[1]
      });
    });
    const tableResize = vue.reactive({
      width: 0,
      height: 0,
      flexWidth: 0,
      leftShadow: false,
      rightShadow: false,
      scrollWidth: 0
    });
    const checkList = vue.ref([]);
    vue.watch(
      () => props.data,
      () => {
        checkList.value.splice(0);
      }
    );
    vue.watch(checkList.value, (val) => {
      emit("select-change", val);
    });
    const provideTreeProps = vue.reactive(Object.assign({ children: "children" }, props.treeProps));
    const canSelectionDatas = vue.ref(tools.flattenArray(props.data, provideTreeProps.children));
    function addOption(arr) {
      canSelectionDatas.value.push(...arr);
    }
    const isTableTree = vue.computed(() => {
      return props.data.filter((v) => {
        return !!v[provideTreeProps.children ?? "children"] || v[provideTreeProps.hasChildren];
      }).length > 0;
    });
    const stripeStyle = vue.computed(() => {
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
    const columns = vue.computed(() => {
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
    const indeterminate = vue.computed(() => {
      var _a;
      if (!((_a = props.options) == null ? void 0 : _a.selection))
        return false;
      return checkList.value.length > 0 && checkList.value.length < canSelectionDatas.value.length;
    });
    const isCheckAll = vue.computed(() => {
      var _a;
      if (!((_a = props.options) == null ? void 0 : _a.selection))
        return false;
      return checkList.value.length === canSelectionDatas.value.length;
    });
    const getStickyIndex = vue.computed(() => {
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
    function styles(css, index2, offset) {
      let obj = {};
      obj["text-align"] = css.align;
      if (css.fixed === "left") {
        obj.left = getStickyLeft(index2) + "px";
      } else if (css.fixed === "right") {
        obj.right = getStickyRight(index2) + (offset ?? 0) + "px";
      }
      return obj;
    }
    function getStickyLeft(index2) {
      var _a, _b;
      let left = 0;
      if (index2 > 0) {
        for (let i = 0; i < index2; i++) {
          let item = (_a = columns.value) == null ? void 0 : _a[i];
          left += (item == null ? void 0 : item.fixed) === "left" ? (item == null ? void 0 : item.width) || MIN_SIZE : 0;
        }
      }
      left += ((_b = props.options) == null ? void 0 : _b.selection) ? 40 : 0;
      return left;
    }
    function getStickyRight(index2) {
      var _a, _b, _c;
      let right = 0;
      if (index2 < ((_a = columns.value) == null ? void 0 : _a.length) - 1) {
        for (let i = ((_b = columns.value) == null ? void 0 : _b.length) - 1; i > index2; i--) {
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
        let idx = checkList.value.findIndex((v) => tools.deepEqual(v, item));
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
    vue.provide(type.TABLE_PROVIDE, {
      props,
      checkList,
      treeProps: provideTreeProps,
      changeSelection,
      addOption
    });
    __expose({ selectRow, clearSelection });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-table", [
          { "is-border": _ctx.options.border },
          { "show-left-shadow": tableResize.leftShadow },
          { "show-right-shadow": tableResize.rightShadow },
          { "is-selection": _ctx.options.selection },
          _ctx.size ?? vue.unref(SIZE)
        ]]),
        ref_key: "tableRef",
        ref: tableRef
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-table__head", _ctx.headerClassName]),
          ref_key: "tableHeadRef",
          ref: tableHeadRef
        }, [
          vue.createElementVNode("table", {
            style: vue.normalizeStyle({ width: tableResize.width - tableResize.scrollWidth + "px" })
          }, [
            vue.createElementVNode("colgroup", null, [
              _ctx.options.selection ? (vue.openBlock(), vue.createElementBlock("col", _hoisted_1)) : vue.createCommentVNode("", true),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(columns.value, (th, index2) => {
                return vue.openBlock(), vue.createElementBlock("col", {
                  key: index2,
                  style: vue.normalizeStyle({
                    width: (th.width || tableResize.flexWidth) + "px",
                    minWidth: (th.width || tableResize.flexWidth) + "px"
                  })
                }, null, 4);
              }), 128)),
              vue.createElementVNode("col", {
                style: vue.normalizeStyle({ width: tableResize.scrollWidth + "px" })
              }, null, 4)
            ]),
            vue.createElementVNode("thead", null, [
              vue.createElementVNode("tr", {
                class: "cu-table__row",
                style: vue.normalizeStyle(_ctx.options.headStyle)
              }, [
                _ctx.options.selection ? (vue.openBlock(), vue.createElementBlock("th", {
                  key: 0,
                  class: vue.normalizeClass(["cu-table__th checkbox fixed-left", { "fixed-shadow-left": getStickyIndex.value.left == -1 }]),
                  width: "40"
                }, [
                  vue.createVNode(vue.unref(index.CuCheckbox), {
                    "model-value": isCheckAll.value,
                    onChange: _changeCheckAll,
                    indeterminate: indeterminate.value
                  }, null, 8, ["model-value", "indeterminate"])
                ], 2)) : vue.createCommentVNode("", true),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(columns.value, (th, index2) => {
                  return vue.openBlock(), vue.createElementBlock("th", {
                    class: vue.normalizeClass(["cu-table__th", [
                      th.fixed ? "fixed-" + th.fixed : void 0,
                      { "fixed-shadow-left": getStickyIndex.value.left == index2 },
                      { "fixed-shadow-right": getStickyIndex.value.right == index2 }
                    ]]),
                    key: index2,
                    style: vue.normalizeStyle(styles(th, index2, tableResize.scrollWidth))
                  }, [
                    vue.createElementVNode("span", null, [
                      vue.renderSlot(_ctx.$slots, "th-" + th.prop, {}, () => [
                        vue.createTextVNode(vue.toDisplayString(th.label), 1)
                      ])
                    ])
                  ], 6);
                }), 128)),
                tableResize.scrollWidth ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_2)) : vue.createCommentVNode("", true)
              ], 4)
            ])
          ], 4)
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-table__body", [
            {
              "is-stripe": _ctx.options.stripe,
              "table-expand": isTableTree.value || _ctx.expand,
              "scrolly-body": tableResize.scrollWidth > 0
            },
            _ctx.bodyClassName
          ]]),
          ref_key: "tableBodyRef",
          ref: tableBodyRef,
          style: vue.normalizeStyle({
            width: tableResize.width + "px",
            "max-height": _ctx.height,
            "--stripe-odd": stripeStyle.value[0] ?? void 0,
            "--stripe-even": stripeStyle.value[1] ?? void 0,
            ..._ctx.options.bodyStyle
          }),
          onScroll: scroll
        }, [
          _ctx.data.length === 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "empty", {}, () => [
              vue.createVNode(vue.unref(index$1.CuEmpty), { description: "暂无数据" })
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("table", {
            key: 1,
            style: vue.normalizeStyle({ width: tableResize.width - tableResize.scrollWidth + "px" })
          }, [
            vue.createElementVNode("colgroup", null, [
              _ctx.options.selection ? (vue.openBlock(), vue.createElementBlock("col", _hoisted_4)) : vue.createCommentVNode("", true),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(columns.value, (td, index2) => {
                return vue.openBlock(), vue.createElementBlock("col", {
                  key: index2,
                  style: vue.normalizeStyle({
                    width: (td.width || tableResize.flexWidth) + "px",
                    minWidth: (td.width || tableResize.flexWidth) + "px"
                  })
                }, null, 4);
              }), 128))
            ]),
            vue.createElementVNode("tbody", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (item, index2) => {
                return vue.openBlock(), vue.createBlock(tableRow_vue_vue_type_script_setup_true_lang.default, {
                  key: index2,
                  row: item,
                  index: index2
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(columns.value, (td) => {
                    return {
                      name: td.prop,
                      fn: vue.withCtx(({ row }) => [
                        vue.renderSlot(_ctx.$slots, td.prop, {
                          row,
                          index: index2
                        })
                      ])
                    };
                  }),
                  _ctx.expand && _ctx.$slots.expand ? {
                    name: "expand",
                    fn: vue.withCtx(({ row }) => [
                      vue.renderSlot(_ctx.$slots, "expand", {
                        row,
                        index: index2
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
exports.default = _sfc_main;
