<template>
  <transition-group name="list" class="cu-upload__list" v-if="type === 'list'" tag="ul">
    <li v-for="(file, index) in previewList" :key="file.uid || file.name">
      <span>
        <i
          :class="[uploadFileEnum[file.uid].status, icons[uploadFileEnum[file.uid].status]]"
          v-if="file.uid && uploadFileEnum[file.uid]"></i>
        <i class="cu-icon-success-c success" v-else></i>
      </span>
      <span class="filename" :class="uploadFileEnum[file.uid!]?.status">{{ file.name }}</span>
      <i class="delete cu-icon-delete" @click="remove(file.uid!, index)"> </i>
      <span class="progress">
        <cu-progress
          :progress="uploadFileEnum[file.uid!].progress"
          v-if="uploadFileEnum[file.uid!]?.status === 'uploading'"
          style="margin-top: 4px"></cu-progress>
      </span>
    </li>
  </transition-group>
  <ul class="cu-upload__pictures" v-else-if="type === 'picture'">
    <transition-group name="list">
      <li v-for="(file, index) in previewList" :key="file.uid || file.name" :class="uploadFileEnum[file.uid!]?.status">
        <transition name="cu-fade">
          <span class="progress" v-if="uploadFileEnum[file.uid!]?.status === 'uploading'">
            <cu-progress
              size="100"
              type="success"
              bar-type="circle"
              :progress="uploadFileEnum[file.uid!].progress || 0"></cu-progress>
          </span>
          <span class="mask" v-else>
            <i class="cu-icon-zoom-in" @click="previewImg(index)"></i>
            <i class="cu-icon-delete" @click="remove(file.uid!, index)"></i>
          </span>
        </transition>
        <img :src="file.url" alt="" />
      </li>
    </transition-group>
    <slot>
      <li class="choose-slot"></li>
    </slot>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { CuProgress } from '../../progress';
import { preview } from '../../preview-image/index';
import type { FileEnum, UploadFile } from './type';

defineOptions({
  name: 'CuUploadList'
});
const icons = {
  ready: 'cu-icon-save',
  uploading: 'cu-icon-upload',
  success: 'cu-icon-check-one',
  fail: 'cu-icon-close-one'
};

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  previewList: Array as PropType<UploadFile[]>,
  uploadFileEnum: {
    type: Object as PropType<FileEnum>,
    required: true
  },
  disabled: Boolean
});
const emit = defineEmits(['remove', 'choose']);

function previewImg(index: number) {
  if (props.disabled) return;
  preview(
    props.previewList?.map((v) => v.url),
    index
  );
}

function remove(uid: number, index: number) {
  if (props.disabled) return;
  emit('remove', uid, index);
}
</script>
