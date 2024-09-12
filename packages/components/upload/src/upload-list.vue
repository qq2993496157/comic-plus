<template>
  <transition-group name="list" class="cu-upload__list" v-if="type === 'list'" tag="ul">
    <li v-for="(file, index) in previewList" :key="file.uid || file.name">
      <span>
        <component
          v-if="file.uid && uploadFileEnum[file.uid]"
          :class="uploadFileEnum[file.uid].status"
          :is="icons[uploadFileEnum[file.uid].status!]" />
        <CheckOne v-else class="success" />
      </span>
      <span class="filename" :class="uploadFileEnum[file.uid!]?.status">{{ file.name }}</span>
      <Delete class="delete" @click="remove(file.uid!, index)" />
      <span class="progress">
        <c-progress
          :progress="uploadFileEnum[file.uid!].progress"
          v-if="uploadFileEnum[file.uid!]?.status === 'uploading'"
          style="margin-top: 4px" />
      </span>
    </li>
  </transition-group>
  <ul class="cu-upload__pictures" v-else-if="type === 'picture'">
    <transition-group name="list">
      <li v-for="(file, index) in previewList" :key="file.uid || file.name" :class="uploadFileEnum[file.uid!]?.status">
        <transition name="cu-fade">
          <span class="progress" v-if="uploadFileEnum[file.uid!]?.status === 'uploading'">
            <c-progress
              size="100"
              type="success"
              bar-type="circle"
              :progress="uploadFileEnum[file.uid!].progress || 0" />
          </span>
          <span class="mask" v-else>
            <ZoomIn @click="previewImg(index)" />
            <Delete @click="remove(file.uid!, index)" />
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
import { CuProgress as CProgress } from '../../progress';
import { preview } from '../../preview-image/index';
import type { FileEnum, UploadFile } from './type';
import { CheckOne, CloseOne, Delete, Save, Upload, ZoomIn } from '../../../icons';

defineOptions({
  name: 'CuUploadList'
});
const icons = {
  ready: Save,
  uploading: Upload,
  success: CheckOne,
  fail: CloseOne
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
