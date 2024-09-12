<template>
  <mode
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
          <span class="cu-popup__title">
            <component v-if="headIcon" class="cu-popup__head--icon" :is="headIcon" :color="color" />{{ title }}
          </span>
          <Close class="close-icon" @click="cancel(distinguishCloseAndCancel ? 'close' : 'cancel')" v-if="showClose" />
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
        <div class="cu-popup__footer">
          <c-button
            size="small"
            plain
            :color="color"
            :type="color ? undefined : type === 'error' ? 'danger' : type || undefined"
            @click="cancel('cancel')"
            v-if="showCancelButton">
            {{ cancelButtonText }}
          </c-button>
          <c-button
            v-if="showConfirmButton"
            size="small"
            :type="color ? undefined : type === 'error' ? 'danger' : type || 'primary'"
            :color="color"
            @click="confirm">
            {{ confirmButtonText }}
          </c-button>
        </div>
      </div>
    </transition>
  </mode>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import '../../style/message-box.css';
import { CuMode as Mode } from '../../../mode';
import { isString, isVueComponent } from '../../../../utils';
import { usePopup } from '../../../../hooks';
import { CuButton as CButton } from '../../../button';
import { confirmProps } from './main.props';
import { Caution, Close, Info, Success, Tips, WarningFilled } from '../../../../icons';
defineOptions({
  name: 'CuConfirm'
});
const typeList = {
  primary: Tips,
  info: Info,
  success: Success,
  warning: Caution,
  error: WarningFilled
};
const props = defineProps(confirmProps);

const { visible, showMode, onAfterEnter, close, onAfterLeave } = usePopup(props);

const TYPE = ref('cancel');

const headIcon = computed(() => {
  if (!props.showIcon) return null;
  if (isVueComponent(props.icon)) return props.icon;
  return props.type ? typeList[props.type] : null;
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
