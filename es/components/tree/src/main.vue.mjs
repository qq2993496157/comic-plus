import { defineComponent, getCurrentInstance, ref, computed, provide, openBlock, createElementBlock, normalizeClass, renderSlot, Fragment, renderList, createBlock, createSlots, withCtx, createElementVNode } from "vue";
import "../style/tree.css";
import _sfc_main$1 from "./tree-node.vue.mjs";
import emitter from "../../../utils/emitter.mjs";
import { treeProps, treeEmits } from "./main.props.mjs";
import { TREE_PROVIDE } from "./type.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "cu-tree__empty" }, "暂无数据", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTree"
  },
  __name: "main",
  props: treeProps,
  emits: treeEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const BUS_EVENT = {
      SET_NODES: "CU_TREE:SET_NODES_" + (instance.uid ?? ""),
      SET_KEYS: "CU_TREE:SET_KEYS_" + (instance.uid ?? "")
    };
    const childNodes = ref([]);
    function _pushNodes(node) {
      childNodes.value.push(node);
    }
    const nodeKeys = computed(() => {
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
      emitter.emit(BUS_EVENT.SET_NODES, nodes);
    }
    function setCheckedKeys(keys) {
      emitter.emit(BUS_EVENT.SET_KEYS, keys);
    }
    provide(TREE_PROVIDE, {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-tree", { "unfold-hover": _ctx.distinguishClickAndExpand }])
      }, [
        _ctx.data.length === 0 ? renderSlot(_ctx.$slots, "empty", { key: 0 }, () => [
          _hoisted_1
        ]) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.data, (item, index) => {
          return openBlock(), createBlock(_sfc_main$1, {
            node: [index],
            data: item,
            onPushNodes: _pushNodes,
            onChangeShow: _changeShow
          }, createSlots({ _: 2 }, [
            _ctx.$slots.default ? {
              name: "default",
              fn: withCtx(({ node, parentNode, childNodes: childNodes2 }) => [
                renderSlot(_ctx.$slots, "default", {
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
export {
  _sfc_main as default
};
