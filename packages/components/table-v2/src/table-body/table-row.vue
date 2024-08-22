<!--
 * @FileDescription: 这个文件暂时留着，指不定哪天要用到
 * @Author: 
 * @Date: 2024-08-14 14:03:04
 * @LastEditors: 
 * @LastEditTime: 2024-08-20 11:22:49
-->

<!-- <template>
  <tr
    v-show="data.display"
    class="cu-table__row"
    :class="[
      isFunction(props.rowClass) ? props.rowClass({ row, rowIndex }) : props.rowClass,
      { 'current-row': rowSelection.newIdx === rowIndex },
      getStripeClass(rowIndex),
      data.treeExpand ? 'cu-table__row--level-' + data._level : undefined
    ]"
    :style="isFunction(props.rowStyle) ? props.rowStyle({ row, rowIndex }) : props.rowStyle"
    @click="clickRow(row, rowIndex)">
    <template v-for="(col, colIdx) in columns" :key="col.uid">
      <td
        class="cu-table__td"
        :class="[
          col.fixed ? 'fixed-' + col.fixed : undefined,
          { 'fixed-shadow-left': getFixedIndex.left == colIdx },
          { 'fixed-shadow-right': getFixedIndex.right == colIdx },
          isFunction(props.cellClass) ? props.cellClass({ row, rowIndex, col, colIndex: colIdx }) : props.cellClass
        ]"
        :style="col.style"
        v-bind="setSpanAttrbuilt(row, rowIndex, col, colIdx)"
        v-if="showWithSpan(row, rowIndex, col, colIdx)">
        <div class="cu-table__cell" :class="getCellClass(col)" v-if="col">
          <template v-if="col.type === 'index'">
            <span v-if="col.props.index">
              {{ isFunction(col.props.index) ? col.props.index(rowIndex) : col.props.index }}
            </span>
            <span v-else> {{ rowIndex + 1 }}</span>
          </template>
          <template v-else-if="col.type === 'selection'">
            <checkbox type="checkbox" v-model="data.selection" />
          </template>
          <template v-else-if="col.type === 'expand'">
            <span class="expand-icon" :class="{ 'is-expand': showExpand }" @click="showExpand = !showExpand">
              <template v-if="col.icon">
                <component v-for="com in col.icon()" :is="com" />
              </template>
              <i v-else class="cu-icon-right"></i>
            </span>
          </template>
          <template v-else-if="col.type === 'default'">
            <template v-if="colIdx === firstDefaultColumnIndex && !expandColumn">
              <span
                class="cu-table__indent"
                v-if="data._level > 0"
                :style="{ width: data._level * props.indent + 'px' }"></span>
              <span class="cu-tabel__placeholder" v-if="isTreeNode && !data.treeExpand"></span>
              <span
                class="expand-icon"
                :class="[{ 'is-expand': data.show }, data.loading ? 'cu-icon-loading' : 'cu-icon-right']"
                v-if="data.treeExpand"
                @click="changeShowMore(data)">
              </span>
            </template>
            <template v-if="col.default">
              <component v-for="com in col.default({ row })" :is="com" />
            </template>
            <template v-else>
              {{ row[col.props.prop] }}
            </template>
          </template>
        </div>
      </td>
    </template>
  </tr>
  <expand-row v-if="data.expand()" v-show="showExpand" :data="data" />
</template>

<script setup lang="ts">
import { PropType, computed, inject, ref } from 'vue';
import { TABLE_V2_PROVIDE, RenderData, Span } from '../type';
import { CuCheckbox as Checkbox } from '../../../checkbox';
import { isArray, isFunction, isObject } from '../../../../utils';
import expandRow from '../components/expand-row';

defineOptions({
  name: 'TableRow'
});

const showExpand = ref(false);

const rowProps = defineProps({
  data: Object as PropType<RenderData>,
  rowIndex: Number
});

const row = computed(() => rowProps.data.row!);

const {
  props,
  columns,
  getFixedIndex,
  rowSelection,
  expandColumn,
  firstDefaultColumnIndex,
  isTreeNode,
  getCellClass,
  clickRow,
  changeShowMore
} = inject(TABLE_V2_PROVIDE);

function getStripeClass(number) {
  if (!props.stripe) return;
  return 'cu-table__row--stripe-' + ((number + 1) % 2 === 0 ? 'even' : 'odd');
}

function setSpanAttrbuilt(row, rowIndex, col, colIndex) {
  let span = {
    rowspan: 1,
    colspan: 1
  };
  if (props.spanMethod) {
    let result: Span = props.spanMethod({ row, rowIndex, col, colIndex });
    if (isArray(result)) {
      span.rowspan = result[0];
      span.colspan = result[1];
    } else if (isObject(result)) {
      span.rowspan = result.rowspan;
      span.colspan = result.colspan;
    }
  }
  return span;
}

const showWithSpan = (row, rowIndex, col, colIndex) => {
  let span = setSpanAttrbuilt(row, rowIndex, col, colIndex);
  return !(('rowspan' in span && span.rowspan === 0) || ('colspan' in span && span.colspan === 0));
};
</script> -->
