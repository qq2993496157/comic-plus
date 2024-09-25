<template>
  <span class="cu-input-number" :class="[{ 'is-disabled': disabled }, currentSize]">
    <span class="cu-input-number__minus" :class="{ disabled: currentValue <= min }" @click="valueMinus">
      <Minus />
    </span>
    <span class="cu-input-number__content">
      <input
        type="number"
        class="cu-input__inner"
        :min="min"
        :max="max"
        :disabled="disabled"
        :value="modelValue"
        @change="change"
        @focus="emit('focus', $event)"
        @blur="blur" />
    </span>
    <span class="cu-input-number__plus" :class="{ disabled: currentValue >= max }" @click="valuePlus">
      <Plus />
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, inject, computed, watch } from 'vue';
import '../style/input-number.css';
import '../../form-common.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { useGlobal, isNumber } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import { inputNumberProps, inputNumberEmits } from './main.props';
import { Minus, Plus } from '../../../icons';
defineOptions({
  name: 'CuInputNumber'
});
const props = defineProps(inputNumberProps);
const emit = defineEmits(inputNumberEmits);

const { itemValidate } = useItemValidate();
const { globalSize } = useGlobal();
const form = inject(FORM_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? globalSize?.value;
});

const currentValue = ref(props.modelValue);

function change(e: Event) {
  currentValue.value = Number((<HTMLInputElement>e.target).value);
  validateValue();
  emit('update:modelValue', currentValue.value);
  emit('change', currentValue.value);
  itemValidate('change');
}
function validateValue() {
  if (isNumber(props.min) && currentValue.value < props.min) {
    currentValue.value = props.min;
  }
  if (isNumber(props.max) && currentValue.value > props.max) {
    currentValue.value = props.max;
  }
}
function valuePlus() {
  if (props.disabled) return;
  if (isNumber(props.max) && currentValue.value > props.max) return;
  currentValue.value += props.step;
  validateValue();
  emit('update:modelValue', currentValue.value);
  emit('change', currentValue.value);
  itemValidate('change');
}
function valueMinus() {
  if (props.disabled) return;
  if (isNumber(props.min) && currentValue.value < props.min) return;
  currentValue.value -= props.step;
  validateValue();
  emit('update:modelValue', currentValue.value);
  emit('change', currentValue.value);
  itemValidate('change');
}

function blur(e: FocusEvent) {
  emit('blur', e);
  itemValidate('blur');
}

watch(
  () => props.modelValue,
  (val) => {
    currentValue.value = val;
  }
);
</script>
