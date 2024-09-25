<template>
  <div class="cu-tree-node">
    <div class="cu-tree__content" :class="data.className" :style="{ 'padding-left': (node.length - 1) * 14 + 'px' }">
      <span :class="{ unfold: nodeShow }" class="tree-icon" @click="_nodeExpanded">
        <Loading class="is-loading" v-if="loading && injectProps.lazy" />
        <component
          :is="isVueComponent(injectProps.icon) ? injectProps.icon : RightFilled"
          v-show="!loading || !injectProps.lazy"
          v-if="isIcon" />
      </span>
      <span class="checkbox" v-if="injectProps.selection">
        <checkbox v-model="checked" :indeterminate="indeterminate" @change="_checkChange" :disabled="data.disabled" />
      </span>
      <div class="cu-tree__info" @click="_nodeClick">
        <component v-if="data.icon" class="node-icon" :is="nodeIcon" />
        <slot :node="data" :parentNode="parentNode" :childNodes="childrenList">
          {{ data[nodeKeys.label] }}
        </slot>
      </div>
    </div>
    <transition-collapse>
      <div class="cu-tree__children" v-show="nodeShow">
        <cu-tree-node
          v-for="(item, index) in childrenList"
          :data="item"
          :parent-node="data"
          :node="[...node, index]"
          @push-nodes="_pushNodes"
          @change-show="_changeShow"
          @change-check="_changeCheck">
          <template #default="{ node, parentNode, childNodes }" v-if="$slots.default">
            <slot :node="node" :parentNode="parentNode" :childNodes="childNodes"></slot>
          </template>
        </cu-tree-node>
      </div>
    </transition-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, getCurrentInstance, onMounted, nextTick, onUnmounted } from 'vue';
import { CuTransitionCollapse as TransitionCollapse } from '../../transition-collapse';
import { CuCheckbox as Checkbox } from '../../checkbox';
import emitter from '../../../utils/emitter';
import { isFunction, isVueComponent } from '../../../utils';
import { TREE_PROVIDE, ChildNodeInstance } from './type';
import { treeNodeProps, treeNodeEmits } from './tree-node.props';
import { Loading, RightFilled } from '../../../icons';
defineOptions({
  name: 'CuTreeNode'
});

const props = defineProps(treeNodeProps);
const emit = defineEmits(treeNodeEmits);
const { nodeKeys, props: injectProps, nodeExpanded, nodeClick, BUS_EVENT } = inject(TREE_PROVIDE);
const instance = getCurrentInstance()!;

const nodeShow = ref<boolean>(getCurrentNodeDefaultExpand());

const loading = ref(false);
const loaded = ref(false);
const checked = ref(false);
const indeterminate = ref(false);
const childNodes = ref<ChildNodeInstance[]>([]);
function _pushNodes(node: ChildNodeInstance) {
  childNodes.value.push(node);
}

const loadList = ref<any[]>([]);

const childrenList = computed(() => {
  return [...(props.data?.[nodeKeys.children!] ?? []), ...loadList.value];
});

const nodeIcon = computed(() => {
  let icon = isFunction(props.data.icon) ? props.data.icon(nodeShow.value) : props.data.icon;
  return isVueComponent(icon) ? icon : null;
});

function getCurrentNodeDefaultExpand(): boolean {
  if (injectProps.lazy) {
    if (injectProps.defaultExpandAll || injectProps.defaultExpandKeys?.includes(props.data?.[nodeKeys.id!])) {
      return childrenList.value.length > 0;
    } else {
      return false;
    }
  } else {
    return (
      injectProps.defaultExpandAll || (injectProps.defaultExpandKeys?.includes(props.data?.[nodeKeys.id!]) ?? false)
    );
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
  if (!injectProps.lazy || loaded.value) {
    if (hasChildren.value) {
      nodeShow.value = !nodeShow.value;
      injectProps.accordion && emit('change-show', instance.uid);
    }
  } else {
    if (!nodeShow.value && !loading.value) {
      loading.value = true;
      injectProps.load?.(props.data, _then, _catch);
    }
  }

  function _then(tree: Record<string, any>[]) {
    loadList.value.push(...tree);
    nodeShow.value = true;
    loading.value = false;
    loaded.value = true;
    injectProps.accordion && emit('change-show', instance.uid);
  }

  function _catch() {
    loaded.value = false;
    loading.value = false;
    nodeShow.value = false;
  }
}

function _checkChange(value: boolean) {
  if (props.data?.disabled) return;
  if (!hasChildren.value) {
    indeterminate.value = false;
    checked.value = value;
    emit('change-check');
  } else {
    childNodes.value.forEach((child) => {
      child._childChange(value);
    });
    _changeCheck();
  }
}

function _childChange(value: boolean) {
  if (!hasChildren.value) {
    if (props.data?.disabled) return;
    indeterminate.value = false;
    checked.value = value;
  } else {
    childNodes.value.forEach((child) => {
      child._childChange(value);
    });
    _changeCheck();
  }
}

function _accordionChangeShow(uid: number) {
  if (uid === instance.uid) return;
  nodeShow.value = false;
}

function _changeShow(uid: number) {
  childNodes.value.forEach((child) => {
    child._accordionChangeShow(uid);
  });
}

function _changeCheck() {
  checked.value = childNodes.value.every((v) => v.checked);
  let list = childNodes.value.filter((v) => v.checked) ?? [];
  indeterminate.value =
    (list.length > 0 && list.length < childNodes.value.length) || childNodes.value.some((v) => v.indeterminate);
  emit('change-check');
}

function _setCurrentNode(nodes: Record<string, any>[]) {
  _checkChange(false);
  if (nodes.some((v: any) => JSON.stringify(v) == JSON.stringify(props.data))) {
    _checkChange(true);
  }
}

function _setCurrentKey(keys: number[]) {
  _checkChange(false);
  if (keys.includes(props.data?.[nodeKeys.id!])) {
    _checkChange(true);
  }
}

emit('push-nodes', {
  uid: instance.uid,
  disabled: props.data?.disabled,
  _childChange,
  _accordionChangeShow,
  checked,
  indeterminate,
  childNodes: childNodes.value,
  getCuurentNodeInfo: () => props.data
});

onMounted(() => {
  nextTick(() => {
    if (injectProps.defaultCheckedKeys?.includes(props.data?.[nodeKeys.id!])) {
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
</script>
