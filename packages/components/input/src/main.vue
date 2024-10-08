<template>
  <span class="cu-input" :class="[currentSize, { 'is-disabled': disabled }]">
    <span class="prefix-slot" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="cu-input__content">
      <span class="prefix-icon" v-if="prefixIcon || $slots['prefix-icon']">
        <slot name="prefix-icon">
          <component v-if="isVueComponent(prefixIcon)" :is="prefixIcon" />
        </slot>
      </span>
      <input
        class="cu-input__inner"
        :value="modelValue"
        @input="inputEvent"
        @focus="emit('focus', $event)"
        @blur="blur"
        @change="change((<HTMLInputElement>$event.target).value)"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        autocomplete="off"
        :maxlength="maxlength"
        :minlength="minlength" />
      <span class="clearable" v-if="clearable">
        <CloseOne v-show="modelValue" @click="clear" />
      </span>
      <span class="suffix-icon" v-if="suffixIcon || $slots['suffix-icon']">
        <slot name="suffix-icon">
          <component v-if="isVueComponent(suffixIcon)" :is="suffixIcon" />
        </slot>
      </span>
    </span>
    <span class="suffix-slot" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import '../style/input.css';
import '../../form-common.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { isVueComponent, useGlobal } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import { inputProps, inputEmits } from './main.props';
import { CloseOne } from '../../../icons';
defineOptions({
  name: 'CuInput'
});
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const { itemValidate } = useItemValidate();
const { globalSize } = useGlobal();
const form = inject(FORM_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? form?.props.size ?? globalSize?.value;
});

function inputEvent(e: Event) {
  let val: string | number = (<HTMLInputElement>e.target).value;
  if (props.type === 'number') {
    val = Number(val);
  }
  emit('update:modelValue', val);
  change(val);
  emit('input', val);
}
function clear() {
  emit('update:modelValue', '');
  change('');
  emit('clear');
}

function blur(e: FocusEvent) {
  emit('blur', e);
  itemValidate('blur');
}
function change(val: string | number) {
  emit('change', val);
  itemValidate('change');
}
</script>
