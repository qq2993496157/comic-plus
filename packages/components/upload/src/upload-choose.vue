<template>
  <span class="cu-upload__chooseItem" @click="emit('choose')">
    <slot name="trigger">
      <cu-button :disabled="disabled" size="small" type="primary" v-if="type === 'list'">选择文件</cu-button>
      <div class="cu-upload__trigger" v-else>
        <i class="cu-icon-plus"></i>
      </div>
    </slot>
  </span>

  <span class="cu-upload__chooseItem" v-if="$slots['default']">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { CuButton } from '../../button';

defineOptions({
  name: 'CuUploadChoose'
});

defineProps({
  type: {
    type: String,
    required: true
  },
  disabled: Boolean
});

const emit = defineEmits(['choose']);
</script>
