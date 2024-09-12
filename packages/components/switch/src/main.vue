<template>
  <label
    class="cu-switch"
    :style="style"
    :class="[{ 'is-disabled': disabled || loading, 'is-square': square }, status, currentSize]">
    <input type="checkbox" :checked="isOn" :disabled="disabled" @change="changeValue" />
    <span class="cu-switch__label cu-switch__label--off" v-if="!inlineText && (offIcon || offText)">
      <component v-if="isVueComponent(offIcon)" :is="offIcon" />
      <template v-else>{{ offText }}</template>
    </span>
    <div class="cu-switch__inner">
      <span v-if="inlineText" class="cu-switch__text">
        <span v-if="isOn">
          <component v-if="isVueComponent(onIcon)" :is="onIcon" />
          <template v-else>{{ onText }}</template>
        </span>
        <span v-else>
          <component v-if="isVueComponent(offIcon)" :is="offIcon" />
          <template v-else>{{ offText }}</template>
        </span>
      </span>
      <span class="cu-switch__loading-warpper">
        <Loading v-if="loading" class="is-loading" />
      </span>
    </div>
    <span class="cu-switch__label cu-switch__label--on" v-if="!inlineText && (onIcon || onText)">
      <component v-if="isVueComponent(onIcon)" :is="onIcon" />
      <template v-else>{{ onText }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, warn, inject } from 'vue';
import '../style/switch.css';
import { useConfig, colorToRgba, colorBlend, isBoolean, isPromise, isVueComponent } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import { switchProps, switchEmits } from './main.props';
import { FORM_PROVIDE } from '../../form/src/type';
import { Loading } from '../../../icons';
defineOptions({
  name: 'CuSwitch'
});
const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);

const form = inject(FORM_PROVIDE, undefined);

const { itemValidate } = useItemValidate();
const { SIZE } = useConfig();

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? SIZE?.value;
});

const isOn = computed(() => {
  return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
});

const status = computed(() => {
  return isOn.value ? 'is-on' : 'is-off';
});

const style = computed(() => {
  const onc = props.onColor ? colorToRgba(props.onColor) : undefined;
  const offc = props.offColor ? colorToRgba(props.offColor) : undefined;

  return {
    '--cu-switch-on-color': props.onColor,
    '--cu-switch-off-color': props.offColor,
    '--cu-switch-on-disabled': onc ? colorBlend(onc, 50) : undefined,
    '--cu-switch-off-disabled': offc ? colorBlend(offc, 50) : undefined
  };
});

function getChecked() {
  return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
}

function changeValue() {
  let checked = !getChecked();
  if (props.beforeChange) {
    let before = props.beforeChange?.();

    const included = [isBoolean(before), isPromise(before)].includes(true);

    if (!included) {
      throw 'beforeChange must be a function that provides a return Boolean value or Promise';
    }

    if (isPromise(before)) {
      before
        .then((result: boolean) => {
          if (result) {
            updateValue(checked);
          }
        })
        .catch((err: string) => {
          err && warn(err);
        });
    } else if (isBoolean(before)) {
      before && updateValue(checked);
    }
  } else {
    updateValue(checked);
  }
}

function updateValue(checked: boolean) {
  let val = isBoolean(props.modelValue) ? checked : checked ? props.onValue! : props.offValue!;
  emit('update:modelValue', val);
  emit('change', val);
  itemValidate('change');
}
</script>
