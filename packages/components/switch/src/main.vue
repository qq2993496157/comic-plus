<template>
  <label
    class="cu-switch"
    :style="style"
    :class="[{ 'is-disabled': disabled || loading, 'is-square': square }, status, currentSize]">
    <span class="cu-switch__label cu-switch__label--off" v-if="!inlineText && (offIcon || offText)">
      <component v-if="isVueComponent(offIcon)" :is="offIcon" />
      <template v-else>{{ offText }}</template>
    </span>
    <div class="cu-switch__container">
      <span v-if="inlineText" class="cu-switch__text">
        <component :is="isOn ? (isVueComponent(onIcon) ? onIcon : 'span') : isVueComponent(offIcon) ? offIcon : 'span'">
          {{ isOn ? onText : offText }}
        </component>
      </span>
      <span class="cu-switch__inner">
        <Loading v-if="loading" class="is-loading" />
      </span>
    </div>
    <span class="cu-switch__label cu-switch__label--on" v-if="!inlineText && (onIcon || onText)">
      <component v-if="isVueComponent(onIcon)" :is="onIcon" />
      <template v-else>{{ onText }}</template>
    </span>

    <input type="checkbox" :checked="isOn" :disabled="disabled" @change="changeValue" />
  </label>
</template>

<script setup lang="ts">
import { computed, warn, inject } from 'vue';
import '../style/switch.css';
import { useGlobal, isBoolean, isPromise, isVueComponent } from '../../../utils';
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
const { globalSize } = useGlobal();

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? globalSize?.value;
});

const isOn = computed(() => {
  return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
});

const status = computed(() => {
  return isOn.value ? 'is-on' : 'is-off';
});

const style = computed(() => {
  return {
    '--cu-switch-on-color': props.onColor,
    '--cu-switch-off-color': props.offColor,
    '--cu-switch-on-disabled': props.onColor ? `color-mix(in srgb, ${props.onColor}, white 50%)` : undefined,
    '--cu-switch-off-disabled': props.onColor ? `color-mix(in srgb, ${props.offColor}, white 50%)` : undefined
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
