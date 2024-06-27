import type { PropType, ExtractPropTypes } from 'vue';
import type { UploadFile, UploadInstance, UploadError } from './type';

export const uploadProps = {
  fileList: Array as PropType<UploadFile[]>,
  type: {
    type: String as PropType<'list' | 'picture'>,
    default: 'list'
  },
  http: [String, Function] as PropType<string | ((instance: UploadInstance) => void)>,
  headers: Object,
  data: Object,
  autoUpload: {
    type: Boolean,
    default: true
  },
  multiple: Boolean,
  limit: Number,
  disabled: Boolean,
  maxFileSize: String,
  withCredentials: Boolean,
  accept: String,
  onExceed: Function as PropType<(files: File[], uploadFiles: UploadFile[]) => void>,
  onLarge: Function as PropType<(files: File[], largeFiles: File[], uploadFiles: UploadFile[]) => void>,
  onSuccess: Function as PropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>,
  onError: Function as PropType<(err: UploadError, uploadFiles: UploadFile[]) => void>,
  onChange: Function as PropType<(uploadFiles: UploadFile[], rawFiles: UploadFile[]) => void>,
  beforeUpload: Function as PropType<(files: UploadInstance[]) => false | void>
} as const;

export type UploadProps = ExtractPropTypes<typeof uploadProps>;

export const uploadEmits = {
  ['update:fileList']: (files: UploadFile[]) => Array.isArray(files)
};

export type UploadEmits = typeof uploadEmits;
