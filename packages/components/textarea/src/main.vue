<template>
  <div class="cu-textarea" :class="{ 'is-disabled': disabled }">
    <textarea
      class="cu-textarea__inner"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="input"
      @focus="emit('focus', $event)"
      @blur="blur"
      @change="change"
      @compositionstart="compositionstart"
      @compositionend="compositionend"
      ref="textareaRef"
      :disabled="disabled"
      :rows="rows" />
    <span class="cu-textarea__maxlength" v-if="maxlength">{{ (modelValue?.length || 0) + '/' + maxlength }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import '../style/textarea.css';
import '../../form-common.css';
import { useItemValidate } from '../../../hooks';
import { textareaProps, textareaEmits } from './main.props';
defineOptions({
  name: 'CuTextarea'
});
const props = defineProps(textareaProps);
const emit = defineEmits(textareaEmits);

const { itemValidate } = useItemValidate();

const lock = ref(false);
const textareaRef = ref(null);

function input(e: Event) {
  if (lock.value) return;
  emit('update:modelValue', (<HTMLInputElement>e.target).value);
  change(e);
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

watch(
  () => props.modelValue,
  (val) => {
    if (textareaRef.value) {
      textareaRef.value.value = val;
    }
  }
);

onMounted(() => {
  props.autoFocus && textareaRef.value.focus();
  textareaRef.value.value = props.modelValue;
});
</script>
