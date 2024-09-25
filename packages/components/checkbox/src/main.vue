<template>
  <label
    class="cu-checkbox"
    :style="{
      '--cu-checkbox-color': color
    }"
    :class="[{ 'is-disabled': disabled, 'is-check': checked }, currentSize]">
    <input type="checkbox" class="cu-checkbox__input" :checked="checked" :disabled="disabled" @change="changeValue" />
    <span class="cu-checkbox__inner" :class="{ indeterminate: indeterminate && !checked }"></span>
    <span class="cu-checkbox__label" v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import '../style/checkbox.css';
import { useGlobal, isBoolean } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import { checkboxProps, checkboxEmits } from './main.props';
import { CHECKBOXGROUP_PROVIDE } from './type';
import { FORM_PROVIDE } from '../../form/src/type';
defineOptions({
  name: 'CuCheckbox'
});
const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);

const checkboxGroup = inject(CHECKBOXGROUP_PROVIDE, undefined);
const form = inject(FORM_PROVIDE, undefined);

const { itemValidate } = useItemValidate();
const { globalSize } = useGlobal();

const currentSize = computed(() => {
  return props.size ?? checkboxGroup?.groupSize.value ?? form?.props.size ?? globalSize?.value;
});

const checked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup?.activeValue.value.includes(props.value);
  } else {
    return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.value;
  }
});

function changeValue(e: MouseEvent) {
  const eTarget = e.target as HTMLInputElement;
  if (checkboxGroup) {
    checkboxGroup.changeItemCheck(eTarget.checked, props.value);
    itemValidate('change');
    return;
  } else {
    let checkValue = eTarget.checked ? props.value ?? eTarget.checked : props.falseValue ?? eTarget.checked;
    emit('update:modelValue', checkValue);
    emit('change', checkValue);
    itemValidate('change');
  }
}
</script>
