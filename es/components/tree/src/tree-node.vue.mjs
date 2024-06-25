import { defineComponent, inject, getCurrentInstance, ref, computed, onMounted, nextTick, onUnmounted, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, unref, createCommentVNode, withDirectives, vShow, createVNode, renderSlot, createTextVNode, toDisplayString, withCtx, Fragment, renderList, createBlock, createSlots } from "vue";
import { CuTransitionCollapse } from "../../transition-collapse/index.mjs";
import { CuCheckbox } from "../../checkbox/index.mjs";
import emitter from "../../../utils/emitter.mjs";
import { isFunction } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { TREE_PROVIDE } from "./type.mjs";
import { treeNodeProps, treeNodeEmits } from "./tree-node.props.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTreeNode"
  },
  __name: "tree-node",
  props: treeNodeProps,
  emits: treeNodeEmits,
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const { nodeKeys, props: injectProps, nodeExpanded, nodeClick, BUS_EVENT } = inject(TREE_PROVIDE);
    const instance = getCurrentInstance();
    const nodeShow = ref(getCurrentNodeDefaultExpand());
    const loading = ref(false);
    const loaded = ref(false);
    const checked = ref(false);
    const indeterminate = ref(false);
    const childNodes = ref([]);
    function _pushNodes(node) {
      childNodes.value.push(node);
    }
    const loadList = ref([]);
    const childrenList = computed(() => {
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
    const hasChildren = computed(() => {
      return childrenList.value.length > 0;
    });
    const isIcon = computed(() => {
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
    onMounted(() => {
      nextTick(() => {
        var _a2, _b;
        if ((_b = injectProps.defaultCheckedKeys) == null ? void 0 : _b.includes((_a2 = props.data) == null ? void 0 : _a2[nodeKeys.id])) {
          _checkChange(true);
        }
      });
    });
    emitter.on(BUS_EVENT.SET_NODES, _setCurrentNode);
    emitter.on(BUS_EVENT.SET_KEYS, _setCurrentKey);
    onUnmounted(() => {
      emitter.off(BUS_EVENT.SET_NODES, _setCurrentNode);
      emitter.off(BUS_EVENT.SET_KEYS, _setCurrentKey);
    });
    return (_ctx, _cache) => {
      const _component_tree_node = resolveComponent("tree-node", true);
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: normalizeClass(["cu-tree__content", _ctx.data.className]),
          style: normalizeStyle({ "padding-left": (_ctx.node.length - 1) * 14 + "px" })
        }, [
          createElementVNode("span", {
            class: normalizeClass([{ unfold: nodeShow.value }, "tree-icon"]),
            onClick: _nodeExpanded
          }, [
            loading.value && unref(injectProps).lazy ? (openBlock(), createElementBlock("i", _hoisted_2)) : createCommentVNode("", true),
            isIcon.value ? withDirectives((openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(unref(injectProps).icon ?? "cu-icon-right-filled")
            }, null, 2)), [
              [vShow, !loading.value || !unref(injectProps).lazy]
            ]) : createCommentVNode("", true)
          ], 2),
          unref(injectProps).selection ? (openBlock(), createElementBlock("span", _hoisted_3, [
            createVNode(unref(CuCheckbox), {
              modelValue: checked.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked.value = $event),
              indeterminate: indeterminate.value,
              onChange: _checkChange,
              disabled: _ctx.data.disabled
            }, null, 8, ["modelValue", "indeterminate", "disabled"])
          ])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "cu-tree__info",
            onClick: _nodeClick
          }, [
            _ctx.data.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(["node-icon", unref(isFunction)(_ctx.data.icon) ? _ctx.data.icon(nodeShow.value) : _ctx.data.icon])
            }, null, 2)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default", {
              node: _ctx.data,
              parentNode: _ctx.parentNode,
              childNodes: childrenList.value
            }, () => [
              createTextVNode(toDisplayString(_ctx.data[unref(nodeKeys).label]), 1)
            ])
          ])
        ], 6),
        createVNode(unref(CuTransitionCollapse), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(childrenList.value, (item, index) => {
                return openBlock(), createBlock(_component_tree_node, {
                  data: item,
                  "parent-node": _ctx.data,
                  node: [..._ctx.node, index],
                  onPushNodes: _pushNodes,
                  onChangeShow: _changeShow,
                  onChangeCheck: _changeCheck
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
                ]), 1032, ["data", "parent-node", "node"]);
              }), 256))
            ], 512), [
              [vShow, nodeShow.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
