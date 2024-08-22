<!--
 * @FileDescription: 这个文件暂时留着，指不定哪天要用到
 * @Author: 
 * @Date: 2024-08-14 14:03:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-08-20 11:40:53
-->


<!-- <template>
  <div class="cu-table-v2__footer">
    <table cellspacing="0" cellpadding="0">
      <table-colgroup />
      <tfoot>
        <tr class="cu-table__row">
          <th
            v-for="(col, colIdx) in columns"
            :key="col.uid"
            class="cu-table__th"
            :class="[
              col.fixed ? 'fixed-' + col.fixed : undefined,
              { 'fixed-shadow-left': getFixedIndex.left == colIdx },
              { 'fixed-shadow-right': getFixedIndex.right == colIdx }
            ]"
            :style="col.style"
            rowspan="1"
            colspan="1">
            <div class="cu-table__cell" :class="getCellClass(col)">
              <component v-if="isVNode(footerCols[colIdx])" :is="footerCols[colIdx]"></component>
              <template v-else>{{ footerCols[colIdx] }}</template>
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, isVNode, ref } from 'vue';
import { TABLE_V2_PROVIDE } from '../type';
import TableColgroup from '../components/table-colgroup';

defineOptions({
  name: 'TableHeader'
});

const defaultSummaryMethod = ({ columns, datas }) => {
  const sum = columns.map((col, idx) => {
    if (idx === 0) return '合计';
    return datas.reduce((result, row) => {
      if (isNaN(result + Number(row[col.prop]))) {
        return '';
      } else {
        return result + Number(row[col.prop]);
      }
    }, 0);
  });
  return sum;
};

const { props, columns, getFixedIndex, getCellClass } = inject(TABLE_V2_PROVIDE);

const params = ref({
  columns: columns.value.map((v) => v.props),
  datas: props.data
});

const footerCols = props.summaryMethod?.(params.value) || defaultSummaryMethod(params.value);

//这样写在组件销毁时会报错  暂时不知道原因
// const footerCols = computed(() => props.summaryMethod?.(params.value) || defaultSummaryMethod(params.value));
</script> -->
