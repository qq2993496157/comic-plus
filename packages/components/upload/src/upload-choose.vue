<template>
  <span class="cu-upload__choose-item" @click="emit('choose')">
    <slot name="trigger">
      <c-button :disabled="disabled" size="small" type="primary" v-if="type === 'list'">选择文件</c-button>
      <div class="cu-upload__trigger" v-else>
        <Plus />
      </div>
    </slot>
  </span>

  <span class="cu-upload__choose-item" v-if="$slots['default']">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { CuButton as CButton } from '../../button';
import { Plus } from '../../../icons';

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
