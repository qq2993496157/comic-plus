<template>
  <div class="cu-textarea" :class="{ 'is-disabled': disabled }">
    <textarea
      class="cu-textarea__inner"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @input="input"
      @focus="emit('focus', $event)"
      @blur="blur"
      @change="change"
      @compositionstart="compositionstart"
      @compositionend="compositionend"
      ref="textareaRef"
      :disabled="disabled"
      :style="{ height: autoHeight ? height || undefined : undefined }"></textarea>
    <span class="cu-textarea__maxlength" v-if="maxlength">{{ (modelValue?.length || 0) + '/' + maxlength }}</span>
    <div class="cu-textarea__text" ref="textareaText">{{ modelValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted } from 'vue';
import '../style/textarea.css';
import '../../form-common.css';
import { useItemValidate } from '../../../utils';
import { textareaProps, textareaEmits } from './main.props';
defineOptions({
  name: 'CuTextarea'
});
const props = defineProps(textareaProps);
const emit = defineEmits(textareaEmits);

const { itemValidate } = useItemValidate();

const lock = ref(false);
const textareaText = ref();
const textareaRef = ref(null);
const height = ref();

onMounted(() => {
  props.autoHeight && (height.value = textareaText.value.scrollHeight + 'px');
  props.autoFocus && textareaRef.value.focus();
});

function input(e: Event) {
  if (lock.value) return;
  emit('update:modelValue', (<HTMLInputElement>e.target).value);
  change(e);
  if (!props.autoHeight) return;
  nextTick(() => {
    height.value = textareaText.value.scrollHeight + 'px';
  });
}
function compositionstart() {
  lock.value = true;
}
function compositionend(e: Event) {
  lock.value = false;
  input(e);
}
function change(e: Event) {
  emit('change', (<HTMLInputElement>e.target).value);
  itemValidate('change');
}
function blur(e: FocusEvent) {
  emit('blur', e);
  itemValidate('blur');
}
</script>
