<template>
  <div
    class="cu-color-picker"
    :class="[currentSize, { 'is-disabled': disabled }, { expand: show }]"
    v-click-outside:[popperRef]="onClickOutside"
    @click="handleClick"
    ref="colorPickerRef">
    <div class="cu-color-picker__container" :class="{ alpha }">
      <div class="preview__box" :style="{ background: disabled ? undefined : modelValue }"></div>
      <i class="cu-icon-minus" v-if="!modelValue"></i>
      <i class="cu-icon-down-filled" v-else></i>
    </div>
    <popper :show="show" :trigger="colorPickerRef" hide-arrow :offset="0" placement="bottom">
      <div class="cu-color-picker__popper" ref="popperRef">
        <pane></pane>
        <div class="cu-color-picker__huering">
          <div class="flex1">
            <hsl-slider></hsl-slider>
            <alpha-slider v-if="alpha"></alpha-slider>
          </div>
          <color-preview></color-preview>
        </div>
        <preset-list v-if="predefine" :predefine="predefine"></preset-list>
        <div class="cu-color-picker__buttons">
          <c-input
            v-model="colorValue"
            @keyup.enter="convertColors"
            @blur="convertColors"
            size="small"
            style="width: 140px"></c-input>
          <div class="cu-color-picker__buttonbox">
            <c-button plain size="small" @click="clear">清空</c-button>
            <c-button type="primary" size="small" @click="confirm">确认</c-button>
          </div>
        </div>
      </div>
    </popper>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, reactive, inject, computed } from 'vue';
import '../style/color-picker.css';
import '../../form-common.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { CuPopper as Popper } from '../../popper';
import { CuButton as CButton } from '../../button';
import { CuInput as CInput } from '../../input';
import pane from './components/pane';
import hslSlider from './components/hsl-slider';
import alphaSlider from './components/alpha-slider';
import colorPreview from './components/color-preview';
import presetList from './components/preset';
import { useClickOutside, useItemValidate, useConfig } from '../../../utils';
import { colorPickerProps, colorPickerEmits } from './main.props';
import Color from '../utils/color';
import { COLORPICKER_PROVIDE } from './type';
defineOptions({
  name: 'CuColorPicker'
});

const props = defineProps(colorPickerProps);
const emit = defineEmits(colorPickerEmits);

const popperRef = ref(null);
const colorPickerRef = ref();
const { itemValidate } = useItemValidate();
const { SIZE } = useConfig();
const form = inject(FORM_PROVIDE, undefined);

const show = ref(false);
const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? SIZE?.value;
});
const formatValue = computed(() => {
  return props.format ? props.format : props.alpha ? 'rgb' : 'hex';
});
const color = reactive(
  new Color({
    enableAlpha: props.alpha,
    format: formatValue.value,
    value: props.modelValue
  })
) as Color;

const colorValue = ref(color.value);

const vClickOutside = useClickOutside();

function onClickOutside() {
  show.value && (show.value = false);
}

function convertColors() {
  color.fromString(colorValue.value);
}

function handleClick() {
  if (props.disabled) return;
  show.value = !show.value;
  if (show.value) {
    color.fromString(props.modelValue);
  }
}

function confirm() {
  emit('update:modelValue', colorValue.value);
  change(colorValue.value);
  show.value = false;
}

function clear() {
  color.fromString('');
  colorValue.value = '';
  color.value = '';
  emit('update:modelValue', '');
  change('');
  show.value = false;
}

function change(val: string) {
  emit('change', val);
  itemValidate('change');
}

watch(
  () => color.value,
  (val) => {
    colorValue.value = val;
  }
);

provide(COLORPICKER_PROVIDE, {
  props,
  show,
  color
});
</script>
