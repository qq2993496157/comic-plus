<template>
  <div
    class="cu-table"
    :class="[
      { 'cu-table--border': border },
      { 'show-left-shadow': tableStyle.leftShadow.value },
      { 'show-right-shadow': tableStyle.rightShadow.value },
      { 'scroll-table': tableStyle.barWidth.value > 0 },
      { 'cu-table--stripe': stripe },
      size ?? globalSize
    ]"
    :style="style">
    <div class="hidden-column" ref="hiddenColumnRef">
      <slot></slot>
    </div>
    <div class="cu-table--warpper" ref="containerRef" @scroll="tableStyle.onscroll">
      <table-header v-if="showHeader" />
      <table-body>
        <template v-if="$slots['empty']" #empty>
          <slot name="empty" />
        </template>
        <template v-if="$slots['expand']" #expand="{ row }">
          <slot name="expand" :row="row" />
        </template>
      </table-body>
      <table-footer v-if="showSummary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref, watch } from 'vue';
import '../style/table.css';
import TableHeader from './table-header';
import TableBody from './table-body';
import TableFooter from './table-footer';
import { Column, TABLE_PROVIDE } from './type';
import { tableEmits, tableProps } from './main.props';
import { useTable, useTableStyle } from './util';
import { getCssHeight, isArray, useGlobal } from '../../../utils';
defineOptions({
  name: 'CuTable'
});

const props = defineProps(tableProps);
const emit = defineEmits(tableEmits);

const MIN_SIZE = 80;
const { globalSize } = useGlobal();

const columns = ref<Column[]>([]);
const hiddenColumnRef = ref();
const containerRef = ref();

const tableData = computed(() => props.data);

const table = useTable(tableData, { emit, props, columns });
const tableStyle = useTableStyle({ containerRef, props, columns, MIN_SIZE });

const style = computed(() => {
  let obj = {};
  obj['height'] = getCssHeight(props.height);
  obj['max-height'] = getCssHeight(props.maxHeight);
  if (props.highlightColor) {
    obj['--cu-table-highlight-color'] = props.highlightColor;
  }
  if (props.stripe && isArray(props.stripeColors)) {
    obj['--cu-table-stripe-color1'] = props.stripeColors[0];
    obj['--cu-table-stripe-color2'] = props.stripeColors[1];
  }
  return obj;
});

function addColumn(column: Column) {
  columns.value.push(column);
}

function removeColumn(uid) {
  const index = columns.value.findIndex((col) => col.uid === uid);
  if (index > -1) {
    columns.value.splice(index, 1);
  }
}

async function sortColumn() {
  await nextTick();
  //这里获取hidden-column中渲染的列包装器，目的是为了解决v-if延迟渲染子组件导致实际渲染table列的顺序出错的bug
  let arr = Array.from(hiddenColumnRef.value.children)
    .map((v: HTMLElement) => v.getAttribute('col-name'))
    .filter(Boolean);

  let k = 'cu-table-column__key_';
  const priority = { left: 1, null: 2, right: 3 };
  columns.value
    .sort((a, b) => arr.indexOf(k + a.uid) - arr.indexOf(k + b.uid)) //第一次排序依赖hidden-column中渲染的div的顺序
    .sort((a, b) => priority[a.fixed] - priority[b.fixed]); //第二次排序为了将fixed属性的col提取出来放置两侧

  updateColStyle();
}

const getFixedIndex = computed(() => {
  return {
    left: columns.value.findLastIndex((item) => item.fixed === 'left'),
    right: columns.value.findIndex((item) => item.fixed === 'right')
  };
});

function getStickyLeft(index: number) {
  let left: number = 0;
  if (index > 0) {
    for (let i = 0; i < index; i++) {
      let item = columns.value?.[i];
      left += item.fixed === 'left' ? Number(item.props.width) || MIN_SIZE : 0;
    }
  }
  return left;
}
function getStickyRight(index: number) {
  let right: number = 0;
  if (index < columns.value?.length! - 1) {
    for (let i = columns.value?.length! - 1; i > index; i--) {
      let item = columns.value?.[i];
      right += item.fixed === 'right' ? Number(item.props.width) || MIN_SIZE : 0;
    }
  }
  return right;
}

function updateColStyle() {
  columns.value.forEach((col, idx) => {
    if (col.fixed === 'left') {
      col.style.left = getStickyLeft(idx) + 'px';
    } else if (col.fixed === 'right') {
      col.style.right = getStickyRight(idx) + 'px';
    }
  });
}

watch(
  () => columns.value.length,
  () => {
    sortColumn();
  }
);

watch(
  () => tableStyle.barWidth.value,
  () => {
    updateColStyle();
  }
);

provide(TABLE_PROVIDE, {
  props,
  columns,
  getFixedIndex,
  addColumn,
  removeColumn,
  ...table,
  ...tableStyle
});

defineExpose({
  selectAll: table.selectAll
});
</script>
