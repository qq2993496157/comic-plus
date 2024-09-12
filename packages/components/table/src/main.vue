<template>
  <div
    class="cu-table"
    ref="tableRef"
    :class="[
      { 'is-border': options.border },
      { 'show-left-shadow': tableResize.leftShadow },
      { 'show-right-shadow': tableResize.rightShadow },
      { 'is-selection': options.selection },
      size ?? SIZE
    ]">
    <div class="cu-table__head" :class="headerClassName" ref="tableHeadRef">
      <table :style="{ width: tableResize.width - tableResize.scrollWidth + 'px' }">
        <colgroup>
          <col v-if="options.selection" style="width: 40px; min-width: 40px" />
          <col
            v-for="(th, index) in columns"
            :key="index"
            :style="{
              width: (th.width || tableResize.flexWidth) + 'px',
              minWidth: (th.width || tableResize.flexWidth) + 'px'
            }" />
          <col :style="{ width: tableResize.scrollWidth + 'px' }" />
        </colgroup>
        <thead>
          <tr class="cu-table__row" :style="options.headStyle">
            <th
              class="cu-table__th checkbox fixed-left"
              :class="{ 'fixed-shadow-left': getStickyIndex.left == -1 }"
              width="40"
              v-if="options.selection">
              <checkbox :model-value="isCheckAll" @change="_changeCheckAll" :indeterminate="indeterminate"></checkbox>
            </th>
            <th
              class="cu-table__th"
              v-for="(th, index) in columns"
              :key="index"
              :class="[
                th.fixed ? 'fixed-' + th.fixed : undefined,
                { 'fixed-shadow-left': getStickyIndex.left == index },
                { 'fixed-shadow-right': getStickyIndex.right == index }
              ]"
              :style="styles(th, index, tableResize.scrollWidth)">
              <span>
                <slot :name="'th-' + th.prop">{{ th.label }}</slot>
              </span>
            </th>
            <th class="cu-table__th fixed-right" v-if="tableResize.scrollWidth"></th>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="cu-table__body"
      :class="[
        {
          'is-stripe': options.stripe,
          'table-expand': isTableTree || expand,
          'scrolly-body': tableResize.scrollWidth > 0
        },
        bodyClassName
      ]"
      ref="tableBodyRef"
      :style="{
        width: tableResize.width + 'px',
        'max-height': height,
        '--stripe-odd': stripeStyle[0] ?? undefined,
        '--stripe-even': stripeStyle[1] ?? undefined,
        ...options.bodyStyle
      }"
      @scroll="scroll">
      <div class="cu-table__empty" v-if="data.length === 0">
        <slot name="empty">
          <empty description="暂无数据"></empty>
        </slot>
      </div>
      <table :style="{ width: tableResize.width - tableResize.scrollWidth + 'px' }" v-else>
        <colgroup>
          <col v-if="options.selection" style="width: 40px; min-width: 40px" />
          <col
            v-for="(td, index) in columns"
            :key="index"
            :style="{
              width: (td.width || tableResize.flexWidth) + 'px',
              minWidth: (td.width || tableResize.flexWidth) + 'px'
            }" />
        </colgroup>
        <tbody>
          <template v-for="(item, index) in data" :key="index">
            <table-row :row="item" :index="index">
              <template v-for="td in columns" #[td.prop]="{ row }" :key="td.prop">
                <slot :name="td.prop" :row="row" :index="index"> </slot>
              </template>
              <template #expand="{ row }" v-if="expand && $slots.expand">
                <slot name="expand" :row="row" :index="index"> </slot>
              </template>
            </table-row>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, provide, CSSProperties } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useConfig, deepEqual } from '../../../utils';
import '../style/table.css';
import TableRow from './components/table-row.vue';
import { CuCheckbox as Checkbox } from '../../checkbox';
import { CuEmpty as Empty } from '../../empty';
import { tableProps, tableEmits } from './main.props';
import { Tableresize, TableColumn, TreeProps, TableData, TABLE_PROVIDE, RowOptions } from './type';

defineOptions({
  name: 'CuTable'
});

const props = defineProps(tableProps);
const emit = defineEmits(tableEmits);

const { SIZE } = useConfig();

const tableRef = ref(null);
const tableHeadRef = ref(null);
const tableBodyRef = ref(null);

const { width: tWidth, height: tHeight } = useElementSize(tableRef);

const MIN_SIZE = 120;

const tableResize = reactive({
  width: 0,
  height: 0,
  flexWidth: 0,
  leftShadow: false,
  rightShadow: false,
  scrollWidth: 0
}) as Tableresize;

const checkList = ref<any[]>([]);

const provideTreeProps = reactive(Object.assign({ children: 'children' }, props.treeProps)) as TreeProps;
const rows = ref<any[]>([]);

const isTableTree = computed(() => {
  return (
    props.data.filter((v) => {
      return !!v[provideTreeProps.children ?? 'children'] || v[provideTreeProps.hasChildren!];
    }).length > 0
  );
});

const stripeStyle = computed(() => {
  if (!props.options?.stripe) return [];
  let s = props.options.bodyStyle;
  if (props.options.stripeColors) {
    return [props.options.stripeColors[0] ?? '#fff', props.options.stripeColors[1] ?? '#fafafa'];
  } else {
    return ['#fff', s?.backgroundColor ?? '#fafafa'];
  }
});
const columns = computed(() => {
  let column = props.options?.column ?? [];
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

const indeterminate = computed(() => {
  if (!props.options?.selection) return false;
  return checkList.value.length > 0 && checkList.value.length < rows.value.length;
});

const isCheckAll = computed(() => {
  if (!props.options?.selection) return false;
  return checkList.value.length > 0 && checkList.value.length === rows.value.length;
});

const getStickyIndex = computed(() => {
  return {
    left: findLastObjectWithProperty(),
    right: columns.value?.findIndex((v) => v.fixed === 'right')
  };
});

// 查找具有指定属性的最后一个对象
function findLastObjectWithProperty() {
  for (let i = columns.value?.length! - 1; i >= 0; i--) {
    let item = columns.value?.[i];
    if (item?.fixed === 'left') {
      return i;
    }
  }
  return -1;
}

function styles(css: TableColumn, index: number, offset?: number) {
  let obj = {} as CSSProperties;
  obj['text-align'] = css.align as CSSProperties['text-align'];
  if (css.fixed === 'left') {
    obj.left = getStickyLeft(index) + 'px';
  } else if (css.fixed === 'right') {
    obj.right = getStickyRight(index) + (offset ?? 0) + 'px';
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
  left += props.options?.selection ? 40 : 0;
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

function scroll(e) {
  tableResize.leftShadow = e.target.scrollLeft > 0;
  tableResize.rightShadow = e.target.scrollWidth - e.target.scrollLeft - e.target.offsetWidth > 0;

  tableHeadRef.value.scrollTo({
    left: e.target.scrollLeft
  });
}

function getResize(rect) {
  const { width, height } = rect;
  let e = tableBodyRef.value;
  tableResize.leftShadow = e.scrollLeft > 0;
  tableResize.rightShadow = e.scrollWidth - e.scrollLeft - e.offsetWidth != 0;
  tableResize.scrollWidth = e.offsetWidth - e.clientWidth;
  tableResize.width = width;
  tableResize.height = height;
  let length = columns.value?.filter((v) => !v.width).length ?? 0;
  let allWidth = columns.value?.reduce((v, o) => (v += Number(o.width) || 0), 0) ?? 0;
  allWidth += props.options?.selection ? 40 : 0;
  let w = (tableResize.width - tableResize.scrollWidth - allWidth) / length;
  tableResize.flexWidth = w <= MIN_SIZE ? MIN_SIZE : w;
}

function changeSelection() {
  checkList.value = rows.value.filter((v) => v.isCheck);
}
function _changeCheckAll(check: boolean) {
  rows.value.forEach((item) => {
    item.updateCheck(check);
  });
  checkList.value = check ? rows.value : [];
}

function selectRow(row: TableData | TableData[]) {
  row = [].concat(row);
  for (const key in row) {
    let item = row[key];
    if (checkList.value.find((v) => deepEqual(v.row, item))) continue;
    let idx = rows.value.findIndex((v) => deepEqual(v.row, item));
    if (idx >= 0) {
      rows.value[idx].updateCheck(true);
    }
    checkList.value.push(item);
  }
}

function addOption(row: RowOptions) {
  rows.value.push(row);
}
function removeOption(uid: number) {
  let idx = rows.value.findIndex((v) => v.uid === uid);
  if (idx >= 0) {
    rows.value.splice(idx, 1);
  }
}

watch([tWidth, tHeight], (val) => {
  getResize({
    width: val[0],
    height: val[1]
  });
});
watch(
  () => props.data,
  () => {
    checkList.value.splice(0);
  }
);
watch(
  () => checkList.value.length,
  () => {
    emit('select-change', checkList.value);
  }
);

provide(TABLE_PROVIDE, {
  props,
  checkList,
  treeProps: provideTreeProps,
  changeSelection,
  addOption,
  removeOption
});

defineExpose({
  selectRow,
  clearSelection: () => _changeCheckAll(false)
});
</script>
