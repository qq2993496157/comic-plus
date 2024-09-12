<template>
  <div class="cu-notice-popup" :class="'cu-notice-popup--' + position" :style="{ zIndex }">
    <transition-group :name="'cu-notice-' + position" @after-leave="afterLeave">
      <div
        class="cu-notice"
        :style="{ '--cu-notice-hovercolor': item.props.color }"
        :class="[item.props.type ? 'cu-notice--' + item.props.type : undefined, { 'is-click': item.props.click }]"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)">
        <div class="cu-notice__head" :style="{ color: item.props.color }">
          <span class="cu-notice__title">
            <component
              class="cu-notice__head--icon"
              v-if="isVueComponent(item.props.icon) || typeList[item.props.type!]"
              :is="item.props.icon ?? typeList[item.props.type!]" />
            {{ item.props.title }}</span
          >
          <Close v-if="item.props.showClose" class="close-icon" @click.stop="item.close(item)" />
        </div>
        <div class="cu-notice__main">
          <template v-if="item.props.isVNode">
            <div v-if="isString(item.props.content)" v-html="item.props.content"></div>
            <component v-else :is="item.props.content"></component>
          </template>
          <template v-else>
            {{ item.props.content }}
          </template>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { NoticeInstance } from './instance';
import { getNextZIndex, isString, isVueComponent } from '../../../../utils';
import { CloseOne, Close, Info, Success, VolumeNotice, Warning } from '../../../../icons';
defineOptions({
  name: 'CuNoticeList'
});
const typeList = {
  primary: VolumeNotice,
  info: Info,
  success: Success,
  warning: Warning,
  error: CloseOne
};

const props = defineProps({
  position: String,
  list: Array as PropType<NoticeInstance[]>
});

const emit = defineEmits(['empty']);
const zIndex = getNextZIndex();

function handleClick(item: NoticeInstance) {
  item.props.click?.(item.close);
}

function afterLeave() {
  if (props.list?.length === 0) {
    emit('empty');
  }
}
</script>
