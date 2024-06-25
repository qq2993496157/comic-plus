<template>
  <tr class="cu-table__row" :class="row.rowClassName" v-show="show">
    <td
      class="cu-table__td checkbox fixed-left"
      :class="{ 'fixed-shadow-left': getStickyIndex.left == -1 }"
      width="40"
      v-if="injectProps.options.selection">
      <cu-checkbox :model-value="isCheck" @change="changeSelection($event, row)"></cu-checkbox>
    </td>
    <td
      colspan="1"
      rowspan="1"
      class="cu-table__td"
      :class="[
        td.fixed ? 'fixed-' + td.fixed : undefined,
        { 'fixed-shadow-left': getStickyIndex.left == i },
        { 'fixed-shadow-right': getStickyIndex.right == i },
        getColClassName(td, i)
      ]"
      v-for="(td, i) in columns"
      :key="i"
      :style="styles(td, i)">
      <span
        class="cu-table__td-placeholder"
        :class="{ unfold: showmore }"
        :style="{ left: calcPaddingLeft - 16 + 'px' }"
        v-if="(row[treeProps.children] || row[treeProps.hasChildren] || injectProps.expand) && i === 0"
        @click="loadMore">
        <i :class="loadLoading ? 'cu-icon-loading' : 'cu-icon-right'"></i>
      </span>
      <span>
        <slot :name="td.prop" :row="row">{{ row[td.prop] ?? injectProps.options.empty }}</slot>
      </span>
    </td>
  </tr>
  <template v-if="injectProps.expand && $slots.expand">
    <div v-show="showmore" class="cu-table__expand">
      <td
        :colspan="columns.length"
        class="cu-table__expand-td"
        :style="{ '--placeholder-left': calcPaddingLeft - 16 + 'px' }">
        <slot name="expand" :row="row"> </slot>
      </td>
    </div>
  </template>
  <template v-if="row[treeProps.children] || row[treeProps.hasChildren]">
    <template v-for="(item, idx) in rowChildList" :key="idx">
      <cu-table-row :row="item" :calcPaddingLeft="calcPaddingLeft + 10" :show="showmore">
        <template v-for="td in columns" #[td.prop]="{ row }">
          <slot :name="td.prop" :row="row"> </slot>
        </template>
        <template #expand="{ row }" v-if="injectProps.expand && $slots.expand">
          <slot name="expand" :row="row"> </slot>
        </template>
      </cu-table-row>
    </template>
  </template>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch, CSSProperties } from 'vue';
import { CuCheckbox } from '../../../checkbox';
import { deepEqual, isFunction } from '../../../../utils';
import { tableRowProps } from './row.props';
import { TABLE_PROVIDE, TableData } from '../type';

defineOptions({
  name: 'CuTableRow'
});

const props = defineProps(tableRowProps);

const { props: injectProps, checkList, treeProps, changeSelection, addOption } = inject(TABLE_PROVIDE);

const showmore = ref(false);
const moreList = ref<TableData[]>([]);
const loadLoading = ref(false);
const isLazy = ref(false);
const MIN_SIZE = 120;

watch(
  () => props.show,
  (val) => {
    if (!val) {
      showmore.value = false;
    }
  }
);

const isCheck = computed(() => {
  return checkList.value.findIndex((v) => deepEqual(v, props.row)) >= 0;
});

const rowChildList = computed(() => {
  return [...(props.row?.[treeProps.children] ?? []), ...moreList.value];
});

const columns = computed(() => {
  let column = injectProps.options?.column ?? [];
  column = column.sort((a, b) => {
    if (a.fixed === 'left' && (!b.fixed || b.fixed !== 'left')) {
      return -1;
    } else if (b.fixed === 'left' && (!a.fixed || a.fixed !== 'left')) {
      return 1;
    } else if (a.fixed === 'right' && b.fixed !== 'right') {
      return 1;
    } else if (b.fixed === 'right' && a.fixed !== 'right') {
      return -1;
    } else {
      return 0;
    }
  });
  return column;
});

function findLastObjectWithProperty() {
  for (let i = columns.value?.length! - 1; i >= 0; i--) {
    let item = columns.value?.[i];
    if (item?.fixed === 'left') {
      return i;
    }
  }
  return -1;
}

const getStickyIndex = computed(() => {
  return {
    left: findLastObjectWithProperty(),
    right: columns.value?.findIndex((v) => v.fixed === 'right')
  };
});

function styles(css: any, index: number) {
  let obj = {
    '--cu-table-td-paddingleft': props.calcPaddingLeft + 4 + 'px'
  } as CSSProperties;
  obj.textAlign = css.align;
  if (css.fixed === 'left') {
    obj.left = getStickyLeft(index) + 'px';
  } else if (css.fixed === 'right') {
    obj.right = getStickyRight(index) + 'px';
  }
  return obj;
}

function getStickyLeft(index: number) {
  let left: number = 0;
  if (index > 0) {
    for (let i = 0; i < index; i++) {
      let item = columns.value?.[i];
      left += item?.fixed === 'left' ? item?.width || MIN_SIZE : 0;
    }
  }
  left += injectProps.options?.selection ? 40 : 0;
  return left;
}
function getStickyRight(index: number) {
  let right: number = 0;
  if (index < columns.value?.length! - 1) {
    for (let i = columns.value?.length! - 1; i > index; i--) {
      let item = columns.value?.[i];
      right += item?.fixed === 'right' ? item?.width || MIN_SIZE : 0;
    }
  }
  return right;
}

function getColClassName(td, tdIndex) {
  if (isFunction(td.className)) {
    return td.className(props.row, props.index, props.row[td.prop], tdIndex);
  } else {
    return td.className;
  }
}

function loadMore() {
  if (injectProps.lazyLoad && !isLazy.value) {
    loadLoading.value = true;
    isLazy.value = true;
    injectProps.load?.(props.row, _then);
  } else {
    showmore.value = !showmore.value;
  }

  function _then(arr: TableData[]) {
    addOption(arr);
    moreList.value = [...moreList.value, ...arr];
    showmore.value = true;
    loadLoading.value = false;
  }
}
</script>
