<template>
  <div
    class="cu-select"
    :class="[{ expand: show, 'is-disabled': disabled, 'is-multiple': multiple }, currentSize]"
    v-click-outside:[popperRef]="onClickOutside"
    ref="selectRef">
    <div class="cu-select__content" @click="handleClick">
      <span v-if="multiple" class="cu-input__inner">
        <i v-if="inputValue.length === 0" class="placeholder">{{ placeholder }}</i>
        <em v-for="val in inputValue" class="cu-select--em" :key="val">
          {{ options[val].props.label }}
          <i class="cu-icon-close-one em-clearable" @click.stop="removeSelectItem(val)"></i>
        </em>
      </span>
      <input
        type="text"
        class="cu-input__inner"
        readonly
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        v-else />
      <span class="suffix-icon" :class="{ 'has-value': modelValue && clearable }">
        <i class="cu-icon-down cu-select__down"></i>
        <i class="cu-icon-close-one clearable" v-if="clearable" @click.stop="clear"></i>
      </span>
    </div>

    <cu-popper :show="show">
      <div
        class="cu-select__popper"
        ref="popperRef"
        :class="currentSize"
        :style="{ width: selectRef?.offsetWidth + 'px' }">
        <cu-scrollbar max-height="280px">
          <ul class="cu-select__dropdown">
            <slot></slot>
          </ul>
        </cu-scrollbar>
      </div>
    </cu-popper>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, reactive, computed, inject } from 'vue';
import '../style/select.css';
import '../../form-common.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { CuPopper } from '../../popper';
import { CuScrollbar } from '../../scrollbar';
import { useConfig, useItemValidate, useClickOutside } from '../../../utils';
import { selectProps, selectEmits } from './main.props';
import { SelectValue, SELECT_PROVIDE, OptionInstance } from './type';
defineOptions({
  name: 'CuSelect'
});
const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const popperRef = ref(null);
const selectRef = ref(null);
const { itemValidate } = useItemValidate();
const { SIZE } = useConfig();
const form = inject(FORM_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? SIZE?.value;
});

const show = ref(false);
const options = reactive({});

const vClickOutside = useClickOutside();

const inputValue = computed(() => {
  if (props.multiple) {
    return props.modelValue;
  } else {
    return options[props.modelValue as string | number]?.props.label;
  }
});

function onClickOutside() {
  show.value && (show.value = false);
}

function optionClick(value: string | number) {
  let val: SelectValue;
  if (props.multiple) {
    let arr: (string | number)[] = [...(props.modelValue as (string | number)[])];
    let index = arr.findIndex((v) => v === value);
    index >= 0 ? arr.splice(index, 1) : arr.push(value);
    val = arr;
  } else {
    val = value;
    show.value = false;
  }
  emit('update:modelValue', val);
  change(val);
}

function clear() {
  show.value = false;
  emit('update:modelValue', props.multiple ? [] : '');
  change(props.multiple ? [] : '');
  emit('clear');
}

function removeSelectItem(val: string | number) {
  let arr = [...(props.modelValue as (string | number)[])];
  arr.splice(
    arr.findIndex((v) => v === val),
    1
  );
  emit('update:modelValue', arr);
  change(arr);
}

function handleClick() {
  if (props.disabled) return;
  show.value = !show.value;
}

function change(val: SelectValue) {
  emit('change', val);
  itemValidate('change');
}

function addOption(item: OptionInstance) {
  options[item.key] = item;
}
function deleteOption(key: string | number) {
  delete options[key];
}

provide(SELECT_PROVIDE, {
  optionClick,
  addOption,
  deleteOption,
  props
});
</script>
