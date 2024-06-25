<template>
  <div class="cu-date-table__box">
    <div class="shortcuts" v-if="props.shortcuts">
      <span v-for="el in props.shortcuts" @click="pickShortcut(el.value)">{{ el.label }}</span>
    </div>
    <div class="cu-date-table__box" v-if="props.range">
      <cu-date-table :date="props.modelValue[0]" ref="dateTableRef1"></cu-date-table>
      <cu-date-table :date="props.modelValue[1]" ref="dateTableRef2"></cu-date-table>
    </div>
    <cu-date-table v-else :date="(props.modelValue as ValueAlone)" ref="dateTableRef"></cu-date-table>
  </div>
  <div class="cu-date-picker__footer">
    <cu-button size="small" type="primary" @click="_confirm">确认</cu-button>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import CuDateTable from './date-table.vue';
import { CuButton } from '../../button';
import { isFunction } from '../../../utils';
import { DATEPICKER_PROVIDE, type ValueAlone, type Shortcut } from './type';
defineOptions({
  name: 'CuDateSelect'
});

const { props, confirm } = inject(DATEPICKER_PROVIDE);

const dateTableRef = ref(null);
const dateTableRef1 = ref(null);
const dateTableRef2 = ref(null);

function _confirm() {
  if (props.range) {
    let datas = [dateTableRef1.value.dateNumber, dateTableRef2.value.dateNumber];
    confirm(datas);
  } else {
    confirm(dateTableRef.value.dateNumber);
  }
}

function pickShortcut(val: Shortcut['value']) {
  if (isFunction(val)) {
    val = val();
  }
  if (props.range) {
    let datas = [
      val[0] ? new Date(val[0]).getTime() : new Date().getTime(),
      val[1] ? new Date(val[1]).getTime() : new Date().getTime()
    ];
    confirm(datas);
  } else {
    confirm(new Date(val as Date | string | number).getTime());
  }
}
</script>
