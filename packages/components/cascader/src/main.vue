<template>
  <div
    class="cu-cascader"
    :class="[{ expand: show }, { 'is-disabled': disabled }, currentSize]"
    v-click-outside:[popperRef]="onClickOutside"
    ref="cascaderRef">
    <div class="cu-cascader__content" @click="handleClick">
      <input
        type="text"
        class="cu-input__inner"
        readonly
        :value="useInputValue"
        :placeholder="placeholder"
        :disabled="disabled" />
      <span class="suffix-icon" :class="{ 'has-value': useInputValue && clearable }">
        <i class="cu-icon-down cu-cascader__down"></i>
        <i class="cu-icon-close-one clearable" v-if="clearable" @click.stop="clear"></i>
      </span>
    </div>

    <popper :show="show" :trigger="cascaderRef" arrow-left placement="bottom-start">
      <div class="cu-cascader__popper" :class="currentSize" ref="popperRef">
        <div class="cu-cascader-pane">
          <scrollbar>
            <div
              class="cu-cascader-pane__item"
              v-for="item in options"
              :key="item[optionProps.value]"
              :class="[
                { active: recodeValues.map((v) => v[optionProps.value]).includes(item[optionProps.value]) },
                { disabled: item.disabled }
              ]"
              @click="itemHandleClick(null, item)">
              <span>{{ item[optionProps.label] }}</span>
              <i class="cu-icon-right" v-if="item[optionProps.children]"></i>
            </div>
          </scrollbar>
        </div>
        <template v-for="item in recodeValues">
          <div class="cu-cascader-pane" :key="item[optionProps.value]" v-if="item[optionProps.children]">
            <scrollbar>
              <div
                class="cu-cascader-pane__item"
                v-for="(child, index) in item[optionProps.children]"
                :key="index"
                :class="[
                  { active: recodeValues.map((v) => v[optionProps.value]).includes(child[optionProps.value]) },
                  { disabled: child.disabled }
                ]"
                @click="itemHandleClick(item[optionProps.value], child)">
                <span>{{ child[optionProps.label] }}</span>
                <i class="cu-icon-right" v-if="child[optionProps.children]"></i>
              </div>
            </scrollbar>
          </div>
        </template>
      </div>
    </popper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, inject } from 'vue';
import '../style/cascader.css';
import '../../form-common.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { CuPopper as Popper } from '../../popper';
import { CuScrollbar as Scrollbar } from '../../scrollbar';
import { deleteAfterIndex, useClickOutside, useItemValidate } from '../../../utils';
import { useConfig } from '../../../utils';
import { cascaderProps, cascaderEmits } from './main.props';
defineOptions({
  name: 'CuCascader'
});
const props = defineProps(cascaderProps);
const emit = defineEmits(cascaderEmits);

const { itemValidate } = useItemValidate();
const popperRef = ref(null);
const cascaderRef = ref();
const { SIZE } = useConfig();
const form = inject(FORM_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? SIZE?.value;
});

const show = ref(false);
const recodeValues = ref<any[]>([]);
const inputValue = ref<any[]>([]);
const vClickOutside = useClickOutside();

const useInputValue = computed(() => {
  return inputValue.value.map((v) => v[optionProps.value.label]).join(optionProps.value.separator);
});

const optionProps = computed(() => {
  return Object.assign(
    {},
    {
      children: 'children',
      label: 'label',
      value: 'value'
    },
    props.prop
  );
});

function onClickOutside() {
  show.value && (show.value = false);
}

function handleClick() {
  show.value = !show.value;
}

function itemHandleClick(parentVal: string | number | null, val: any) {
  if (val.disabled) return;
  if (parentVal != null) {
    let index = recodeValues.value.findIndex((v) => v[optionProps.value.value] === parentVal);
    if (index >= 0) {
      deleteAfterIndex(recodeValues.value, index);
    }
  } else {
    recodeValues.value = [];
  }
  recodeValues.value.push(val);
  if (!val[optionProps.value.children] || props.arbitrarily) {
    let value = recodeValues.value.map((v) => v?.[optionProps.value.value]);
    emit('update:modelValue', value);
    change(value);
    !props.arbitrarily && (show.value = false);
  }
}

function change(val: any[]) {
  emit('change', val);
  itemValidate('change');
}

function clear() {
  show.value = false;
  emit('update:modelValue', []);
  change([]);
  emit('clear');
}

watch(
  () => props.modelValue,
  (val: any[]) => {
    const vals = [].concat(val);
    inputValue.value = [];
    let arr = props.options;
    vals.forEach((item) => {
      let current = arr.find((v) => v[optionProps.value.value] === item) || null;
      if (current) {
        inputValue.value.push(current);
        arr = current[optionProps.value.children] || [];
      }
    });
  },
  { immediate: true }
);
watch(show, (val: boolean) => {
  if (val) {
    recodeValues.value = [];
    recodeValues.value = [...inputValue.value];
  }
});
</script>
