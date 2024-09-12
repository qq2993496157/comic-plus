<template>
  <div class="cu-pagination" :class="[{ 'is-background': background }, size]">
    <div class="cu-pagination__container">
      <div v-for="name in layout" :class="'cu-pagination__' + name">
        <template v-if="name === 'total'">
          {{ `共${total}条` }}
        </template>
        <template v-else-if="name === 'sizes'">
          <c-select
            v-model="currentPageSize"
            @change="changeSelect"
            style="width: 100px"
            v-if="pageSizes?.length > 0"
            :size="size">
            <c-option v-for="item in pageSizes" :label="item + '条/页'" :value="item"></c-option>
          </c-select>
        </template>
        <template v-else-if="name === 'pages'">
          <span @click="pagesPrev()" :class="{ disabled: currentPageRef <= 1 }">
            <Left />
          </span>
          <span :class="{ current: currentPageRef === 1 }" @click="pagesHandleClick(1)">1</span>
          <span class="cu-pagination__buttons" v-if="showPrevMore" @click="jumpPage(-5)">
            <More class="cu-pagination__icon" />
            <DoubleLeft class="cu-pagination__icon" />
          </span>
          <span v-for="num in pager" :class="{ current: num === currentPageRef }" @click="pagesHandleClick(num)">
            {{ num }}
          </span>
          <span class="cu-pagination__buttons" v-if="showNextMore" @click="jumpPage(5)">
            <More class="cu-pagination__icon" />
            <DoubleRight class="cu-pagination__icon" />
          </span>
          <span
            :class="{ current: currentPageRef === LAST_VALUE }"
            @click="pagesHandleClick(LAST_VALUE)"
            v-if="LAST_VALUE > 1"
            >{{ LAST_VALUE }}</span
          >
          <span @click="pagesNext()" :class="{ disabled: currentPageRef >= LAST_VALUE }">
            <Right />
          </span>
        </template>
        <template v-else-if="name === 'jumper'">
          跳转至<c-input
            type="number"
            :model-value="currentPageRef"
            @blur="change"
            @keyup.enter="change"
            style="width: 50px; margin: 0 4px"
            :size="size"></c-input
          >页
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import '../style/pagination.css';
import { CuSelect as CSelect } from '../../select/index';
import { CuOption as COption } from '../../option/index';
import { CuInput as CInput } from '../../input/index';
import { paginationProps, paginationEmits } from './main.props';
import { DoubleLeft, DoubleRight, More, Left, Right } from '../../../icons';

defineOptions({
  name: 'CuPagination'
});
const props = defineProps(paginationProps);
const emit = defineEmits(paginationEmits);

const LAST_VALUE = computed(() => {
  return Math.ceil(props.total / currentPageSize.value);
});

const currentPageRef = ref(props.currentPage);
const showPrevMore = ref(false);
const showNextMore = ref(false);
const currentPageSize = ref(props.pageSize);

watch(
  () => props.pageSize,
  (val) => {
    currentPageSize.value = val;
  }
);
watch(
  () => props.currentPage,
  (val) => {
    currentPageRef.value = val;
  }
);

const pager = computed(() => {
  const current = currentPageRef.value;
  const pagerCount = props.pagerCount;
  const halfPagerCount = (pagerCount - 1) / 2;
  const pageCount = LAST_VALUE.value;
  if (pageCount > pagerCount) {
    showPrevMore.value = current > pagerCount - halfPagerCount;
    showNextMore.value = current < pageCount - halfPagerCount;
  } else {
    showPrevMore.value = false;
    showNextMore.value = false;
  }
  const array: number[] = [];
  if (showPrevMore.value && !showNextMore.value) {
    const startPage = pageCount - (pagerCount - 2);
    for (let i = startPage; i < pageCount; i++) {
      array.push(i);
    }
  } else if (!showPrevMore.value && showNextMore.value) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i);
    }
  } else if (showPrevMore.value && showNextMore.value) {
    const offset = Math.floor(pagerCount / 2) - 1;
    for (let i = current - offset; i <= current + offset; i++) {
      array.push(i);
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      array.push(i);
    }
  }
  return array;
});

watch(
  () => currentPageRef.value,
  (val) => {
    if (val <= 0) {
      currentPageRef.value = 1;
    } else if (val > LAST_VALUE.value) {
      currentPageRef.value = LAST_VALUE.value;
    }
    emit('update:currentPage', Number(val));
    emit('current-change', Number(val));
  }
);

function changeSelect() {
  emit('update:pageSize', currentPageSize.value);
  emit('size-change', currentPageSize.value);
}

function pagesHandleClick(num: number) {
  currentPageRef.value = num;
}
function pagesPrev() {
  currentPageRef.value--;
}
function pagesNext() {
  currentPageRef.value++;
}

function jumpPage(num: number) {
  if (currentPageRef.value + num >= LAST_VALUE.value) {
    currentPageRef.value = LAST_VALUE.value - 1;
  } else if (currentPageRef.value + num <= 1) {
    currentPageRef.value = 2;
  } else {
    currentPageRef.value += num;
  }
}

function change(e: Event) {
  let num = Number((<HTMLInputElement>e.target).value);
  if (num >= LAST_VALUE.value) {
    currentPageRef.value = LAST_VALUE.value;
  } else if (num <= 1) {
    currentPageRef.value = 1;
  } else {
    currentPageRef.value = num;
  }
  (<HTMLInputElement>e.target).value = currentPageRef.value.toString();
}
</script>
