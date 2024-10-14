<!--
 * @FileDescription: 这个文件暂时留着，指不定哪天要用到
 * @Author: 
 * @Date: 2024-08-14 14:03:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-08-20 11:48:02
-->

<!-- <template>
  <div class="cu-table__header">
    <table cellspacing="0" cellpadding="0">
      <table-colgroup />
      <thead>
        <tr
          class="cu-table__row"
          :class="props.headerRowClass"
          :style="props.headerRowStyle">
          <th
            v-for="(col, colIdx) in columns"
            :key="col.uid"
            class="cu-table__th"
            :class="[
              col.fixed ? 'fixed-' + col.fixed : undefined,
              { 'fixed-shadow-left': getFixedIndex.left == colIdx },
              { 'fixed-shadow-right': getFixedIndex.right == colIdx },
              isFunction(props.headerCellClass)
                ? props.headerCellClass({ col, colIndex: colIdx })
                : props.headerCellClass
            ]"
            :style="col.style"
            rowspan="1"
            colspan="1">
            <div class="cu-table__cell" :class="getCellClass(col)">
              <template v-if="col.type === 'selection'">
                <checkbox :model-value="isAllSelected" :indeterminate="indeterminate" @change="selectAll" />
              </template>
              <template v-else-if="col.type === 'index'">{{ col.props.label }}</template>
              <template v-else-if="col.type === 'default'">
                <template v-if="col.header">
                  <component v-for="com in col.header({ column: '内容待定' })" :is="com"></component>
                </template>
                <template v-else>
                  {{ col.props.label }}
                </template>
              </template>
            </div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { TABLE_PROVIDE } from '../type';
import { CuCheckbox as Checkbox } from '../../../checkbox';
import TableColgroup from '../components/table-colgroup';
import { isFunction } from '../../../../utils';

defineOptions({
  name: 'TableHeader'
});

const { props, columns, isAllSelected, indeterminate, getFixedIndex, selectAll, getCellClass } =
  inject(TABLE_PROVIDE);
</script> -->
