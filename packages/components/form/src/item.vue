<template>
  <div
    class="cu-form-item"
    :class="{ required: isRequired && !injectProps.hideRequiredAsterisk, 'is-error': errorMsg }">
    <span class="label" :style="labelStyle" v-if="label || $slots['label']">
      <i class="asterisk"></i>
      <slot name="label">{{ label }}</slot>
    </span>
    <span class="cu-form-item__content">
      <slot></slot>
      <transition name="cu-error">
        <span class="cu-form__error" v-if="errorMsg">{{ errorMsg }}</span>
      </transition>
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, ref, provide, getCurrentInstance, onUnmounted } from 'vue';
import { isArray, isNumber } from '../../../utils';
import Schema from 'async-validator';
import { formItemProps } from './item.props';
import { FORM_PROVIDE, FORMITEM_PROVIDE } from './type';
defineOptions({
  name: 'CuFormItem'
});
const props = defineProps(formItemProps);
const instance = getCurrentInstance()!;

const { props: injectProps, itemValidatePush, itemValidateDelete } = inject(FORM_PROVIDE);

const errorMsg = ref<string>('');

const descriptor = computed(() => {
  let arr: any[] = [];
  if (props.rules) {
    arr = arr.concat(props.rules);
  }
  if (props.prop && injectProps.rules?.[props.prop]) {
    arr = arr.concat(injectProps.rules?.[props.prop]);
  }
  return arr || [];
});

const isRequired = computed(() => {
  let reqArr = descriptor.value
    .map((v) => {
      return v?.required;
    })
    .filter(Boolean);
  return props.required || reqArr.length > 0;
});

const labelStyle = computed(() => {
  if (injectProps.labelPosition && injectProps.labelPosition != 'top') {
    return {
      width: props.labelWidth ?? injectProps.labelWidth ?? undefined
    };
  }
  return undefined;
});

const trigger = computed(() => {
  if (!props.prop) return [];
  let arr = descriptor.value.filter((v) => v.hasOwnProperty('trigger')).map((v) => v.trigger);
  return arr || [];
});

function returnTypeof(val: any) {
  if (typeof val === 'object') {
    return isArray(val) ? 'array' : 'object';
  }
  return typeof val;
}

function validate() {
  if (props.prop) {
    let t = injectProps.model?.[props.prop];
    let k = props.prop;
    if (isNumber(props.propIndex)) {
      t = t[props.propIndex];
      k = k + '.' + props.propIndex;
    }
    let fied = Object.assign({}, { type: returnTypeof(t) }, { [k]: descriptor.value });
    const validator = new Schema(fied);
    return validator.validate({ [k]: t }, { firstFields: true }, (err) => {
      errorMsg.value = '';
      if (err) {
        errorMsg.value = err[0].message || '';
        return;
      }
    });
  } else {
    return true;
  }
}

function clearValidate() {
  errorMsg.value = '';
}

provide(FORMITEM_PROVIDE, { trigger: trigger.value, fn: validate });

onMounted(() => {
  if (props.prop && itemValidatePush) {
    let k = props.prop;
    if (isNumber(props.propIndex)) {
      k = k + '.' + props.propIndex;
    }
    itemValidatePush?.({
      uid: instance.uid,
      prop: k,
      validate,
      clearValidate
    });
  }
});
onUnmounted(() => {
  itemValidateDelete?.(instance.uid);
});
</script>
