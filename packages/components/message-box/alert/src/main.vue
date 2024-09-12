<template>
  <mode
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
        <div class="cu-popup__head">
          <span class="cu-popup__title">
            <component v-if="headIcon" class="cu-popup__head--icon" :is="headIcon" :color="color" />{{ title }}
          </span>
          <Close class="close-icon" @click="close" v-if="showClose" />
        </div>
        <div class="cu-popup__content">
          <template v-if="isVNode">
            <div v-if="isString(content)" v-html="content"></div>
            <component v-else :is="content" />
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
  </mode>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import '../../style/message-box.css';
import { CuMode as Mode } from '../../../mode';
import { isString, isVueComponent } from '../../../../utils';
import { usePopup } from '../../../../hooks';
import { CuButton } from '../../../button';
import { alertProps } from './main.props';
import { Caution, Close, Info, Success, Tips, WarningFilled } from '../../../../icons';
defineOptions({
  name: 'CuAlert'
});
const typeList = {
  primary: Tips,
  info: Info,
  success: Success,
  warning: Caution,
  error: WarningFilled
};

const props = defineProps(alertProps);

const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props);

const headIcon = computed(() => {
  if (!props.showIcon) return null;
  if (isVueComponent(props.icon)) return props.icon;
  return props.type ? typeList[props.type] : null;
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
