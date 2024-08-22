<template>
  <template v-for="(value, key) in notices">
    <notice-list :list="value" :position="key" @empty="changeLength"></notice-list>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../../style/message-box.css';
import NoticeList from './list.vue';
import { noticeInstances } from './instance';
defineOptions({
  name: 'CuNotice'
});

const props = defineProps({
  destroy: Function
});

const notices = computed(() => {
  return noticeInstances;
});

const isLengthZero = computed(() => {
  return (
    notices.value.lt.length === 0 &&
    notices.value.lb.length === 0 &&
    notices.value.rt.length === 0 &&
    notices.value.rb.length === 0
  );
});

function changeLength() {
  if (isLengthZero.value) {
    props.destroy?.();
  }
}
</script>
