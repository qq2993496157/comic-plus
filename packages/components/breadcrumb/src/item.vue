<template>
  <div class="cu-breadcrumb-item">
    <span class="cu-breadcrumb__text" :class="[{ link: to }, { active }]" @click="itemHandleClick()">
      <slot></slot>
    </span>
    <span class="cu-breadcrumb__separator" v-if="!injectProps.fill">
      <component v-if="isVueComponent(injectProps.separator)" :is="injectProps.separator" />
      <template v-else>
        {{ injectProps.separator ?? '/' }}
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, getCurrentInstance } from 'vue';
import type { Router } from 'vue-router';
import { breadcrumbItemProps } from './item.props';
import { BREADCRUMB_PROVIDE } from './type';
import { isVueComponent } from '../../../utils';

defineOptions({
  name: 'CuBreadcrumbItem'
});

const props = defineProps(breadcrumbItemProps);

const instance = getCurrentInstance()!;
const router = instance.appContext.config.globalProperties.$router as Router;

const { props: injectProps } = inject(BREADCRUMB_PROVIDE);

function itemHandleClick() {
  if (!props.to) return;
  router?.push(props.to);
}
</script>
