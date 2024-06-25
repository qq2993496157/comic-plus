<template>
  <div class="cu-ellipsis" ref="ellipsis">
    <template v-if="type === 'data'">
      <template v-for="(item, index) in data">
        <div v-if="clamp >= 0 && (showMore || index < clamp)">
          <slot :row="item"></slot>
        </div>
      </template>
      <div @click="showMore = !showMore" v-if="data.length > clamp" class="cu-ellipsis__button">
        {{ showMore ? closeText : openText }}<i :class="`cu-icon-double-${showMore ? 'up' : 'down'}`"></i>
      </div>
    </template>
    <template v-else-if="type === 'text'">
      <div style="display: flex">
        <div
          class="cu-ellipsis__text"
          :class="{ 'show-more': showMore, 'is-ellipsis': hasButton }"
          ref="ellipsisText"
          :style="{ '--cu-ellipsis-clamp': showMore ? 99999999 : clamp, '--cu-ellipsis-button-height': buttonHeight }">
          <span
            @click="showMore = !showMore"
            ref="buttonRef"
            class="cu-ellipsis__button float"
            v-if="hasButton && !isIOS">
            {{ showMore ? closeText : openText }}<i :class="`cu-icon-double-${showMore ? 'up' : 'down'}`"></i>
          </span>
          <slot>
            {{ text }}
          </slot>
        </div>
      </div>
      <span @click="showMore = !showMore" class="cu-ellipsis__button" v-if="hasButton && isIOS">
        {{ showMore ? closeText : openText }}<i :class="`cu-icon-double-${showMore ? 'up' : 'down'}`"></i>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, computed } from 'vue';
import { isIOS } from '@vueuse/core';
import '../style/ellipsis.css';
import { ellipsisProps } from './main.props';
defineOptions({
  name: 'CuEllipsis'
});

// let isMac = /macintosh|mac os x/i.test(navigator.userAgent); //MAC系统

const props = defineProps(ellipsisProps);

const showMore = ref(false);
const ellipsisText = ref();
const buttonRef = ref();
const hasButton = ref(false);

function getShowButton() {
  if (!ellipsisText.value) return true;
  if (props.clamp >= 0) {
    return ellipsisText.value.scrollHeight > ellipsisText.value.offsetHeight;
  } else {
    return false;
  }
}

const buttonHeight = computed(() => {
  if (!buttonRef.value) return '-21px';
  return '-' + (buttonRef.value?.getBoundingClientRect().height ?? '21') + 'px';
});

function getPresetAttr() {
  nextTick(() => {
    hasButton.value = getShowButton();
  });
}

watch(
  () => props.text,
  () => {
    getPresetAttr();
  }
);

onMounted(() => {
  getPresetAttr();
});
</script>
