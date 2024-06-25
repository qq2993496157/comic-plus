"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("../../transition-collapse/index.js");
const index = require("../../checkbox/index.js");
const emitter = require("../../../utils/emitter.js");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const type = require("./type.js");
const treeNode_props = require("./tree-node.props.js");
const _hoisted_1 = { class: "cu-tree-node" };
const _hoisted_2 = {
  key: 0,
  class: "cu-icon-loading"
};
const _hoisted_3 = {
  key: 0,
  class: "checkbox"
};
const _hoisted_4 = { class: "cu-tree__children" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTreeNode"
  },
  __name: "tree-node",
  props: treeNode_props.treeNodeProps,
  emits: treeNode_props.treeNodeEmits,
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const { nodeKeys, props: injectProps, nodeExpanded, nodeClick, BUS_EVENT } = vue.inject(type.TREE_PROVIDE);
    const instance = vue.getCurrentInstance();
    const nodeShow = vue.ref(getCurrentNodeDefaultExpand());
    const loading = vue.ref(false);
    const loaded = vue.ref(false);
    const checked = vue.ref(false);
    const indeterminate = vue.ref(false);
    const childNodes = vue.ref([]);
    function _pushNodes(node) {
      childNodes.value.push(node);
    }
    const loadList = vue.ref([]);
    const childrenList = vue.computed(() => {
      var _a2;
      return [...((_a2 = props.data) == null ? void 0 : _a2[nodeKeys.children]) ?? [], ...loadList.value];
    });
    function getCurrentNodeDefaultExpand() {
      var _a2, _b, _c, _d;
      if (injectProps.lazy) {
        if (injectProps.defaultExpandAll || ((_b = injectProps.defaultExpandKeys) == null ? void 0 : _b.includes((_a2 = props.data) == null ? void 0 : _a2[nodeKeys.id]))) {
          return childrenList.value.length > 0;
        } else {
          return false;
        }
      } else {
        return injectProps.defaultExpandAll || (((_d = injectProps.defaultExpandKeys) == null ? void 0 : _d.includes((_c = props.data) == null ? void 0 : _c[nodeKeys.id])) ?? false);
      }
    }
    const hasChildren = vue.computed(() => {
      return childrenList.value.length > 0;
    });
    const isIcon = vue.computed(() => {
      if (injectProps.lazy) {
        if (loaded.value) {
          return childrenList.value.length > 0;
        }
        return true;
      }
      return childrenList.value.length > 0;
    });
    function _nodeExpanded() {
      expend();
      if (injectProps.distinguishClickAndExpand) {
        nodeExpanded(props.data, nodeShow.value, props.node);
      } else {
        nodeClick(props.data, props.node);
      }
    }
    function _nodeClick() {
      nodeClick(props.data, props.node);
      if (!injectProps.distinguishClickAndExpand) {
        expend();
      }
    }
    function expend() {
      var _a2;
      if (!injectProps.lazy || loaded.value) {
        if (hasChildren.value) {
          nodeShow.value = !nodeShow.value;
          injectProps.accordion && emit("change-show", instance.uid);
        }
      } else {
        if (!nodeShow.value && !loading.value) {
          loading.value = true;
          (_a2 = injectProps.load) == null ? void 0 : _a2.call(injectProps, props.data, _then, _catch);
        }
      }
      function _then(tree) {
        loadList.value.push(...tree);
        nodeShow.value = true;
        loading.value = false;
        loaded.value = true;
        injectProps.accordion && emit("change-show", instance.uid);
      }
      function _catch() {
        loaded.value = false;
        loading.value = false;
        nodeShow.value = false;
      }
    }
    function _checkChange(value) {
      var _a2;
      if ((_a2 = props.data) == null ? void 0 : _a2.disabled)
        return;
      if (!hasChildren.value) {
        indeterminate.value = false;
        checked.value = value;
        emit("change-check");
      } else {
        childNodes.value.forEach((child) => {
          child._childChange(value);
        });
        _changeCheck();
      }
    }
    function _childChange(value) {
      var _a2;
      if (!hasChildren.value) {
        if ((_a2 = props.data) == null ? void 0 : _a2.disabled)
          return;
        indeterminate.value = false;
        checked.value = value;
      } else {
        childNodes.value.forEach((child) => {
          child._childChange(value);
        });
        _changeCheck();
      }
    }
    function _accordionChangeShow(uid) {
      if (uid === instance.uid)
        return;
      nodeShow.value = false;
    }
    function _changeShow(uid) {
      childNodes.value.forEach((child) => {
        child._accordionChangeShow(uid);
      });
    }
    function _changeCheck() {
      checked.value = childNodes.value.every((v) => v.checked);
      let list = childNodes.value.filter((v) => v.checked) ?? [];
      indeterminate.value = list.length > 0 && list.length < childNodes.value.length || childNodes.value.some((v) => v.indeterminate);
      emit("change-check");
    }
    function _setCurrentNode(nodes) {
      _checkChange(false);
      if (nodes.some((v) => JSON.stringify(v) == JSON.stringify(props.data))) {
        _checkChange(true);
      }
    }
    function _setCurrentKey(keys) {
      var _a2;
      _checkChange(false);
      if (keys.includes((_a2 = props.data) == null ? void 0 : _a2[nodeKeys.id])) {
        _checkChange(true);
      }
    }
    emit("push-nodes", {
      uid: instance.uid,
      disabled: (_a = props.data) == null ? void 0 : _a.disabled,
      _childChange,
      _accordionChangeShow,
      checked,
      indeterminate,
      childNodes: childNodes.value,
      getCuurentNodeInfo: () => props.data
    });
    vue.onMounted(() => {
      vue.nextTick(() => {
        var _a2, _b;
        if ((_b = injectProps.defaultCheckedKeys) == null ? void 0 : _b.includes((_a2 = props.data) == null ? void 0 : _a2[nodeKeys.id])) {
          _checkChange(true);
        }
      });
    });
    emitter.default.on(BUS_EVENT.SET_NODES, _setCurrentNode);
    emitter.default.on(BUS_EVENT.SET_KEYS, _setCurrentKey);
    vue.onUnmounted(() => {
      emitter.default.off(BUS_EVENT.SET_NODES, _setCurrentNode);
      emitter.default.off(BUS_EVENT.SET_KEYS, _setCurrentKey);
    });
    return (_ctx, _cache) => {
      const _component_tree_node = vue.resolveComponent("tree-node", true);
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-tree__content", _ctx.data.className]),
          style: vue.normalizeStyle({ "padding-left": (_ctx.node.length - 1) * 14 + "px" })
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([{ unfold: nodeShow.value }, "tree-icon"]),
            onClick: _nodeExpanded
          }, [
            loading.value && vue.unref(injectProps).lazy ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_2)) : vue.createCommentVNode("", true),
            isIcon.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("i", {
              key: 1,
              class: vue.normalizeClass(vue.unref(injectProps).icon ?? "cu-icon-right-filled")
            }, null, 2)), [
              [vue.vShow, !loading.value || !vue.unref(injectProps).lazy]
            ]) : vue.createCommentVNode("", true)
          ], 2),
          vue.unref(injectProps).selection ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
            vue.createVNode(vue.unref(index.CuCheckbox), {
              modelValue: checked.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked.value = $event),
              indeterminate: indeterminate.value,
              onChange: _checkChange,
              disabled: _ctx.data.disabled
            }, null, 8, ["modelValue", "indeterminate", "disabled"])
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", {
            class: "cu-tree__info",
            onClick: _nodeClick
          }, [
            _ctx.data.icon ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass(["node-icon", vue.unref(typescript.isFunction)(_ctx.data.icon) ? _ctx.data.icon(nodeShow.value) : _ctx.data.icon])
            }, null, 2)) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "default", {
              node: _ctx.data,
              parentNode: _ctx.parentNode,
              childNodes: childrenList.value
            }, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.data[vue.unref(nodeKeys).label]), 1)
            ])
          ])
        ], 6),
        vue.createVNode(vue.unref(index$1.CuTransitionCollapse), null, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", _hoisted_4, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(childrenList.value, (item, index2) => {
                return vue.openBlock(), vue.createBlock(_component_tree_node, {
                  data: item,
                  "parent-node": _ctx.data,
                  node: [..._ctx.node, index2],
                  onPushNodes: _pushNodes,
                  onChangeShow: _changeShow,
                  onChangeCheck: _changeCheck
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
                ]), 1032, ["data", "parent-node", "node"]);
              }), 256))
            ], 512), [
              [vue.vShow, nodeShow.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
exports.default = _sfc_main;
