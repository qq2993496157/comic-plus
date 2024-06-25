"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const uploadProps = {
  fileList: Array,
  type: {
    type: String,
    default: "list"
  },
  http: {
    type: [String, Function],
    required: true
  },
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
  onExceed: Function,
  onLarge: Function,
  onSuccess: Function,
  onError: Function,
  onChange: Function,
  beforeUpload: Function
};
const uploadEmits = {
  ["update:fileList"]: (files) => Array.isArray(files)
};
exports.uploadEmits = uploadEmits;
exports.uploadProps = uploadProps;
