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
    <!-- :style="textareaStyle" -->
    <span class="cu-textarea__maxlength" v-if="maxlength">{{ (modelValue?.length || 0) + '/' + maxlength }}</span>
    <!-- <div class="cu-textarea__text" ref="textareaText" v-if="autoHeight">{{ modelValue }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, watch, computed } from 'vue';
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
// const textareaText = ref();
const textareaRef = ref(null);
// const height = ref();

// const { height } = useElementSize(textareaRef);

// const textareaStyle = computed(() => {
//   return {
//     height: height.value + 'px'
//   };
// });

function input(e: Event) {
  if (lock.value) return;
  emit('update:modelValue', (<HTMLInputElement>e.target).value);
  change(e);
  // if (props.autoHeight) {
  //   nextTick(() => {
  //     height.value = textareaText.value?.scrollHeight;
  //   });
  // }
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
  // props.autoHeight && (height.value = textareaText.value?.scrollHeight);
  props.autoFocus && textareaRef.value.focus();
  textareaRef.value.value = props.modelValue;
});
</script>
