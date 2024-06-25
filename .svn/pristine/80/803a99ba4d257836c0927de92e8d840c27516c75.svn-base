<template>
  <div class="cu-list" :class="{ 'is-border': border }">
    <div class="cu-list__head" v-if="$slots['header'] || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <transition-group tag="ul" :name="animation ?? 'list-animation'" class="cu-list__container" v-if="animated">
      <slot></slot>
    </transition-group>
    <ul class="cu-list__container" v-else>
      <slot></slot>
    </ul>
    <div class="cu-list__footer" v-if="$slots['footer'] || footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/list.css';
import { listProps } from './main.props';

defineOptions({
  name: 'CuList'
});

defineProps(listProps);
</script>
