<template>
  <cu-mode
    :show="showMode"
    :custom-class="['cu-mode__flex', modeClass]"
    :lock-scroll="lockScroll"
    @close="destroy(TYPE)"
    @open="onAfterEnter"
    @mode-click="handleModeClose()">
    <transition name="cu-fade-top" @after-leave="onAfterLeave">
      <div
        class="cu-popup"
        :class="[type ? 'cu-popup--' + type : undefined, { 'is-center': center }, customClass]"
        v-if="visible">
        <div class="cu-popup__head">
          <div class="title">
            <i v-if="headIcon" :class="headIcon" :style="{ color }"></i>
            <span>{{ title }}</span>
          </div>
          <i class="cu-icon-close" @click="cancel(distinguishCloseAndCancel ? 'close' : 'cancel')" v-if="showClose"></i>
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
        <div class="cu-popup__footer">
          <cu-button
            size="small"
            plain
            :color="color"
            :type="color ? undefined : type === 'error' ? 'danger' : type || undefined"
            @click="cancel('cancel')"
            v-if="showCancelButton">
            {{ cancelButtonText }}
          </cu-button>
          <cu-button
            v-if="showConfirmButton"
            size="small"
            :type="color ? undefined : type === 'error' ? 'danger' : type || 'primary'"
            :color="color"
            @click="confirm">
            {{ confirmButtonText }}
          </cu-button>
        </div>
      </div>
    </transition>
  </cu-mode>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import '../../style/message-box.css';
import { CuMode } from '../../../mode';
import { usePopup, isString } from '../../../../utils';
import CuButton from '../../../button/src/main.vue';
import { confirmProps } from './main.props';
defineOptions({
  name: 'CuConfirm'
});
const typeList = {
  primary: 'cu-icon-tips',
  info: 'cu-icon-info',
  success: 'cu-icon-success',
  warning: 'cu-icon-caution',
  error: 'cu-icon-warning-filled'
};
const props = defineProps(confirmProps);

const { visible, showMode, onAfterEnter, close, onAfterLeave } = usePopup(props);

const TYPE = ref('cancel');

const headIcon = computed(() => {
  if (!props.showIcon) return false;
  if (props.icon) return props.icon;
  return props.type ? typeList[props.type] : '';
});

function handleModeClose() {
  if (!props.modeClose) return;
  cancel('cancel');
}
function cancel(val: string) {
  TYPE.value = val;
  close();
}
function confirm() {
  close();
  TYPE.value = 'confirm';
}

onMounted(() => {
  showMode.value = true;
  if (props.escClose) {
    onKeyStroke('Escape', (e) => {
      e.preventDefault();
      cancel(props.distinguishCloseAndCancel ? 'esc' : 'cancel');
    });
  }
});
</script>
