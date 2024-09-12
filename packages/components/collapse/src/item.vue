<template>
  <div class="cu-collapse-item" :style="style">
    <div class="cu-collapse-item__head" @click="changeShow">
      <slot name="head">
        <span>
          <slot name="label">{{ label }}</slot>
        </span>
        <span class="cu-collapse-item__line"></span>
        <Right class="cu-collapse--icon" :class="{ active: showItem }" />
      </slot>
    </div>
    <transition-collapse>
      <div v-show="showItem">
        <div class="cu-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </transition-collapse>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { CuTransitionCollapse as TransitionCollapse } from '../../transition-collapse';
import { collapseItemProps } from './item.props';
import { COLLAPSE_PROVIDE } from './type';
import { Right } from '../../../icons';

defineOptions({
  name: 'CuCollapseItem'
});
const props = defineProps(collapseItemProps);

const { props: injectProps, activeValue, collapseChange } = inject(COLLAPSE_PROVIDE);

const showItem = computed(() => {
  return injectProps.accordion ? activeValue.value === props.name : activeValue.value.includes(props.name) || false;
});

const style = computed(() => {
  return {
    background: injectProps.fill ? props.background ?? injectProps.background : undefined,
    color: props.color ?? injectProps.color
  };
});

const changeShow = function () {
  collapseChange(!showItem.value, props.name);
};
</script>
