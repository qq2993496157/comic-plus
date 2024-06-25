"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../checkbox/index.js");
const typescript = require("../../../../utils/typescript.js");
require("../../../../utils/config.js");
const tools = require("../../../../utils/tools.js");
const row_props = require("./row.props.js");
const type = require("../type.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-table__expand"
};
const _hoisted_2 = ["colspan"];
const MIN_SIZE = 120;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTableRow"
  },
  __name: "table-row",
  props: row_props.tableRowProps,
  setup(__props) {
    const props = __props;
    const { props: injectProps, checkList, treeProps, changeSelection, addOption } = vue.inject(type.TABLE_PROVIDE);
    const showmore = vue.ref(false);
    const moreList = vue.ref([]);
    const loadLoading = vue.ref(false);
    const isLazy = vue.ref(false);
    vue.watch(
      () => props.show,
      (val) => {
        if (!val) {
          showmore.value = false;
        }
      }
    );
    const isCheck = vue.computed(() => {
      return checkList.value.findIndex((v) => tools.deepEqual(v, props.row)) >= 0;
    });
    const rowChildList = vue.computed(() => {
      var _a;
      return [...((_a = props.row) == null ? void 0 : _a[treeProps.children]) ?? [], ...moreList.value];
    });
    const columns = vue.computed(() => {
      var _a;
      let column = ((_a = injectProps.options) == null ? void 0 : _a.column) ?? [];
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
    const getStickyIndex = vue.computed(() => {
      var _a;
      return {
        left: findLastObjectWithProperty(),
        right: (_a = columns.value) == null ? void 0 : _a.findIndex((v) => v.fixed === "right")
      };
    });
    function styles(css, index2) {
      let obj = {
        "--cu-table-td-paddingleft": props.calcPaddingLeft + 4 + "px"
      };
      obj.textAlign = css.align;
      if (css.fixed === "left") {
        obj.left = getStickyLeft(index2) + "px";
      } else if (css.fixed === "right") {
        obj.right = getStickyRight(index2) + "px";
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
      left += ((_b = injectProps.options) == null ? void 0 : _b.selection) ? 40 : 0;
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
    function getColClassName(td, tdIndex) {
      if (typescript.isFunction(td.className)) {
        return td.className(props.row, props.index, props.row[td.prop], tdIndex);
      } else {
        return td.className;
      }
    }
    function loadMore() {
      var _a;
      if (injectProps.lazyLoad && !isLazy.value) {
        loadLoading.value = true;
        isLazy.value = true;
        (_a = injectProps.load) == null ? void 0 : _a.call(injectProps, props.row, _then);
      } else {
        showmore.value = !showmore.value;
      }
      function _then(arr) {
        addOption(arr);
        moreList.value = [...moreList.value, ...arr];
        showmore.value = true;
        loadLoading.value = false;
      }
    }
    return (_ctx, _cache) => {
      const _component_cu_table_row = vue.resolveComponent("cu-table-row");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.withDirectives(vue.createElementVNode("tr", {
          class: vue.normalizeClass(["cu-table__row", _ctx.row.rowClassName])
        }, [
          vue.unref(injectProps).options.selection ? (vue.openBlock(), vue.createElementBlock("td", {
            key: 0,
            class: vue.normalizeClass(["cu-table__td checkbox fixed-left", { "fixed-shadow-left": getStickyIndex.value.left == -1 }]),
            width: "40"
          }, [
            vue.createVNode(vue.unref(index.CuCheckbox), {
              "model-value": isCheck.value,
              onChange: _cache[0] || (_cache[0] = ($event) => vue.unref(changeSelection)($event, _ctx.row))
            }, null, 8, ["model-value"])
          ], 2)) : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(columns.value, (td, i) => {
            return vue.openBlock(), vue.createElementBlock("td", {
              colspan: "1",
              rowspan: "1",
              class: vue.normalizeClass(["cu-table__td", [
                td.fixed ? "fixed-" + td.fixed : void 0,
                { "fixed-shadow-left": getStickyIndex.value.left == i },
                { "fixed-shadow-right": getStickyIndex.value.right == i },
                getColClassName(td, i)
              ]]),
              key: i,
              style: vue.normalizeStyle(styles(td, i))
            }, [
              (_ctx.row[vue.unref(treeProps).children] || _ctx.row[vue.unref(treeProps).hasChildren] || vue.unref(injectProps).expand) && i === 0 ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: vue.normalizeClass(["cu-table__td-placeholder", { unfold: showmore.value }]),
                style: vue.normalizeStyle({ left: _ctx.calcPaddingLeft - 16 + "px" }),
                onClick: loadMore
              }, [
                vue.createElementVNode("i", {
                  class: vue.normalizeClass(loadLoading.value ? "cu-icon-loading" : "cu-icon-right")
                }, null, 2)
              ], 6)) : vue.createCommentVNode("", true),
              vue.createElementVNode("span", null, [
                vue.renderSlot(_ctx.$slots, td.prop, { row: _ctx.row }, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.row[td.prop] ?? vue.unref(injectProps).options.empty), 1)
                ])
              ])
            ], 6);
          }), 128))
        ], 2), [
          [vue.vShow, _ctx.show]
        ]),
        vue.unref(injectProps).expand && _ctx.$slots.expand ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("td", {
            colspan: columns.value.length,
            class: "cu-table__expand-td",
            style: vue.normalizeStyle({ "--placeholder-left": _ctx.calcPaddingLeft - 16 + "px" })
          }, [
            vue.renderSlot(_ctx.$slots, "expand", { row: _ctx.row })
          ], 12, _hoisted_2)
        ], 512)), [
          [vue.vShow, showmore.value]
        ]) : vue.createCommentVNode("", true),
        _ctx.row[vue.unref(treeProps).children] || _ctx.row[vue.unref(treeProps).hasChildren] ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(rowChildList.value, (item, idx) => {
          return vue.openBlock(), vue.createBlock(_component_cu_table_row, {
            key: idx,
            row: item,
            calcPaddingLeft: _ctx.calcPaddingLeft + 10,
            show: showmore.value
          }, vue.createSlots({ _: 2 }, [
            vue.renderList(columns.value, (td) => {
              return {
                name: td.prop,
                fn: vue.withCtx(({ row }) => [
                  vue.renderSlot(_ctx.$slots, td.prop, { row })
                ])
              };
            }),
            vue.unref(injectProps).expand && _ctx.$slots.expand ? {
              name: "expand",
              fn: vue.withCtx(({ row }) => [
                vue.renderSlot(_ctx.$slots, "expand", { row })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["row", "calcPaddingLeft", "show"]);
        }), 128)) : vue.createCommentVNode("", true)
      ], 64);
    };
  }
});
exports.default = _sfc_main;
