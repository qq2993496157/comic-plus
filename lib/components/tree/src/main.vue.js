"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/tree.css");
const treeNode_vue_vue_type_script_setup_true_lang = require("./tree-node.vue.js");
const emitter = require("../../../utils/emitter.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "cu-tree__empty" }, "暂无数据", -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTree"
  },
  __name: "main",
  props: main_props.treeProps,
  emits: main_props.treeEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const instance = vue.getCurrentInstance();
    const BUS_EVENT = {
      SET_NODES: "CU_TREE:SET_NODES_" + (instance.uid ?? ""),
      SET_KEYS: "CU_TREE:SET_KEYS_" + (instance.uid ?? "")
    };
    const childNodes = vue.ref([]);
    function _pushNodes(node) {
      childNodes.value.push(node);
    }
    const nodeKeys = vue.computed(() => {
      return Object.assign(
        {
          label: "label",
          id: "id",
          children: "children"
        },
        props.treeProps
      );
    });
    function nodeClick(node, depths) {
      emit("node-click", node, depths);
    }
    function nodeExpanded(node, expend, depths) {
      emit("node-expand", node, expend, depths);
    }
    function _changeShow(uid) {
      childNodes.value.forEach((child) => {
        child._accordionChangeShow(uid);
      });
    }
    function getChildNodesInfo(nodes) {
      let arr = [];
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.checked) {
          arr.push(node.getCuurentNodeInfo());
        }
        if (node.childNodes.length > 0) {
          let childNodes2 = getChildNodesInfo(node.childNodes);
          arr.push(...childNodes2);
        }
      }
      return arr;
    }
    function getCheckedNodes() {
      return getChildNodesInfo(childNodes.value);
    }
    function getCheckedKeys() {
      let arr = getChildNodesInfo(childNodes.value);
      return arr.map((v) => v[nodeKeys.value.id]);
    }
    function setCheckedNodes(nodes) {
      emitter.default.emit(BUS_EVENT.SET_NODES, nodes);
    }
    function setCheckedKeys(keys) {
      emitter.default.emit(BUS_EVENT.SET_KEYS, keys);
    }
    vue.provide(type.TREE_PROVIDE, {
      props,
      nodeKeys: nodeKeys.value,
      nodeClick,
      nodeExpanded,
      BUS_EVENT
    });
    __expose({
      getCheckedNodes,
      getCheckedKeys,
      setCheckedNodes,
      setCheckedKeys
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-tree", { "unfold-hover": _ctx.distinguishClickAndExpand }])
      }, [
        _ctx.data.length === 0 ? vue.renderSlot(_ctx.$slots, "empty", { key: 0 }, () => [
          _hoisted_1
        ]) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(_ctx.data, (item, index) => {
          return vue.openBlock(), vue.createBlock(treeNode_vue_vue_type_script_setup_true_lang.default, {
            node: [index],
            data: item,
            onPushNodes: _pushNodes,
            onChangeShow: _changeShow
          }, vue.createSlots({ _: 2 }, [
            _ctx.$slots.default ? {
              name: "default",
              fn: vue.withCtx(({ node, parentNode, childNodes: childNodes2 }) => [
                vue.renderSlot(_ctx.$slots, "default", {
                  node,
                  parentNode,
                  childNodes: childNodes2
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["node", "data"]);
        }), 256))
      ], 2);
    };
  }
});
exports.default = _sfc_main;
