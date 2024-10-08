<template>
  <div class="cu-tree" :class="{ 'unfold-hover': distinguishClickAndExpand }">
    <template v-if="data.length === 0">
      <slot name="empty">
        <div class="cu-tree__empty">暂无数据</div>
      </slot>
    </template>
    <template v-else>
      <tree-node
        v-for="(item, index) in data"
        :node="[index]"
        :data="item"
        @push-nodes="_pushNodes"
        @change-show="_changeShow">
        <template #default="{ node, parentNode, childNodes }" v-if="$slots.default">
          <slot :node="node" :parentNode="parentNode" :childNodes="childNodes"></slot>
        </template>
      </tree-node>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, getCurrentInstance } from 'vue';
import '../style/tree.css';
import TreeNode from './tree-node.vue';
import emitter from '../../../utils/emitter';
import { treeProps, treeEmits } from './main.props';
import { TreeKeyProps, ChildNodeInstance, TREE_PROVIDE } from './type';
defineOptions({
  name: 'CuTree'
});

const props = defineProps(treeProps);
const emit = defineEmits(treeEmits);
const instance = getCurrentInstance()!;

const BUS_EVENT = {
  SET_NODES: 'CU_TREE:SET_NODES_' + (instance.uid ?? ''),
  SET_KEYS: 'CU_TREE:SET_KEYS_' + (instance.uid ?? '')
} as const;

const childNodes = ref<ChildNodeInstance[]>([]);
function _pushNodes(node: ChildNodeInstance) {
  childNodes.value.push(node);
}

const nodeKeys = computed<TreeKeyProps>(() => {
  return Object.assign(
    {
      label: 'label',
      id: 'id',
      children: 'children'
    },
    props.treeProps
  );
});

function nodeClick(node, depths) {
  emit('node-click', node, depths);
}

function nodeExpanded(node, expend, depths) {
  emit('node-expand', node, expend, depths);
}
function _changeShow(uid: number) {
  childNodes.value.forEach((child) => {
    child._accordionChangeShow(uid);
  });
}

function getChildNodesInfo(nodes: ChildNodeInstance[]): any[] {
  let arr: any[] = [];
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.checked) {
      arr.push(node.getCuurentNodeInfo());
    }
    if (node.childNodes.length > 0) {
      let childNodes = getChildNodesInfo(node.childNodes);
      arr.push(...childNodes);
    }
  }
  return arr;
}

function getCheckedNodes() {
  return getChildNodesInfo(childNodes.value);
}

function getCheckedKeys() {
  let arr = getChildNodesInfo(childNodes.value);
  return arr.map((v) => v[nodeKeys.value.id!]);
}

function setCheckedNodes(nodes: object[]) {
  emitter.emit(BUS_EVENT.SET_NODES, nodes);
}

function setCheckedKeys(keys: number[]) {
  emitter.emit(BUS_EVENT.SET_KEYS, keys);
}

provide(TREE_PROVIDE, {
  props,
  nodeKeys: nodeKeys.value,
  nodeClick,
  nodeExpanded,
  BUS_EVENT
});

defineExpose({
  getCheckedNodes,
  getCheckedKeys,
  setCheckedNodes,
  setCheckedKeys
});
</script>
