<template>
  <cu-mode
    :show="showMode"
    :lock-scroll="lockScroll"
    :custom-class="['cu-mode__flex', modeClass]"
    @close="destroy()"
    @open="onAfterEnter"
    @mode-click="modeHandleClick">
    <transition name="cu-fade-top" @after-leave="onAfterLeave()">
      <div
        class="cu-popup"
        :class="[type ? 'cu-popup--' + type : undefined, { 'is-center': center }, customClass]"
        v-if="visible">
        <div class="cu-popup__head" :style="{ color }">
          <div class="title">
            <i v-if="headIcon" :class="headIcon"></i>
            <span>{{ title }}</span>
          </div>
          <i class="cu-icon-close" @click="close" v-if="showClose"></i>
        </div>
        <div class="cu-popup__content">
          <template v-if="isVNode">
            <div v-if="isString(content)" v-html="content"></div>
            <component v-else :is="content"></component>
          </template>
          <template v-else>
            {{ content }}
          </template>
        </div>
        <div class="cu-popup__footer" v-if="showButton">
          <cu-button
            size="small"
            :type="color ? undefined : type === 'error' ? 'danger' : type"
            :color="color"
            @click="close">
            {{ closeButtonText }}
          </cu-button>
        </div>
      </div>
    </transition>
  </cu-mode>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import '../../style/message-box.css';
import { CuMode } from '../../../mode';
import { usePopup, isString } from '../../../../utils';
import { CuButton } from '../../../button';
import { alertProps } from './main.props';
defineOptions({
  name: 'CuAlert'
});
const typeList = {
  primary: 'cu-icon-tips',
  info: 'cu-icon-info',
  success: 'cu-icon-success',
  warning: 'cu-icon-caution',
  error: 'cu-icon-warning-filled'
};

const props = defineProps(alertProps);

const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props);

const headIcon = computed(() => {
  if (!props.showIcon) return false;
  if (props.icon) return props.icon;
  return props.type ? typeList[props.type] : '';
});

onMounted(() => {
  showMode.value = true;
  if (props.escClose) {
    onKeyStroke('Escape', (e) => {
      e.preventDefault();
      close();
    });
  }
});
</script>
