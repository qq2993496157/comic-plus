"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/upload.css");
const uploadList_vue_vue_type_script_setup_true_lang = require("./upload-list.vue.js");
const uploadChoose_vue_vue_type_script_setup_true_lang = require("./upload-choose.vue.js");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const upload = require("../utils/upload.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-upload__tips" };
const _hoisted_2 = { class: "cu-upload__tips" };
const _hoisted_3 = ["multiple", "disabled", "accept", "limit"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuUpload"
  },
  __name: "main",
  props: main_props.uploadProps,
  emits: main_props.uploadEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputRef = vue.ref();
    const uploadFileEnum = vue.reactive({});
    vue.watch(
      () => props.fileList,
      () => {
        var _a;
        (_a = props.fileList) == null ? void 0 : _a.forEach((_, index) => {
          var _a2;
          (_a2 = props.fileList[index]).uid || (_a2.uid = upload.getUid());
        });
      },
      {
        deep: true,
        immediate: true
      }
    );
    const previewList = vue.computed(() => {
      return props.fileList ?? [];
    });
    function uploadHandleClick() {
      if (props.disabled)
        return;
      inputRef.value.click();
    }
    function handleChange(e) {
      const fArr = e.target.files || [];
      const files = Array.from(fArr);
      inputRef.value.value = "";
      processFile(files);
    }
    function processFile(files) {
      var _a, _b, _c;
      if (files.length + ((_a = props.fileList) == null ? void 0 : _a.length) > props.limit) {
        (_b = props.onExceed) == null ? void 0 : _b.call(props, files, props.fileList);
        return;
      }
      if (!props.multiple) {
        files = files.slice(0, 1);
        clearFiles();
      }
      if (props.maxFileSize && files.filter((v) => v.size > upload.parseFileSize(props.maxFileSize)).length > 0) {
        (_c = props.onLarge) == null ? void 0 : _c.call(
          props,
          files,
          files.filter((v) => v.size > upload.parseFileSize(props.maxFileSize)),
          props.fileList
        );
        return;
      }
      files.forEach((file) => {
        readyUpload(file);
      });
      updateFileList();
      if (props.autoUpload) {
        submit();
      }
    }
    function clearFiles() {
      for (const uid in uploadFileEnum) {
        delete uploadFileEnum[uid];
      }
    }
    function readyUpload(file) {
      const { headers, http, withCredentials, data } = props;
      const uid = upload.getUid();
      let params = vue.reactive(
        new upload.default({
          headers,
          http,
          file,
          data,
          uid,
          withCredentials,
          status: "ready",
          name: file.name,
          url: URL.createObjectURL(file),
          success: (res, instance) => {
            var _a;
            const files = changeFiles(instance.uid);
            (_a = props.onSuccess) == null ? void 0 : _a.call(props, res, files);
          },
          fail: (err, instance) => {
            var _a;
            removeFile(instance.uid);
            (_a = props.onError) == null ? void 0 : _a.call(props, err, props.fileList);
          }
        })
      );
      uploadFileEnum[uid] = params;
    }
    function changeFiles(uid) {
      let files = props.fileList ?? [];
      if (!props.multiple) {
        files = [];
      }
      const { file } = uploadFileEnum[uid];
      let index = files.findIndex((v) => v.uid === uid);
      if (index >= 0) {
        files[index] = { name: file.name, url: file.url, uid };
      } else {
        files.push({ name: file.name, url: file.url, uid });
      }
      delete uploadFileEnum[uid];
      emit("update:fileList", files);
      return files;
    }
    function updateFileList() {
      var _a;
      let files = props.fileList ?? [];
      if (!props.multiple) {
        files = [];
      }
      const reloadFiles = Object.values(uploadFileEnum).map((item) => {
        return {
          uid: item.uid,
          name: item.name,
          url: item.url
        };
      }).filter((v) => files.findIndex((s) => s.uid === v.uid) === -1);
      emit("update:fileList", [...files, ...reloadFiles]);
      (_a = props.onChange) == null ? void 0 : _a.call(props, files, reloadFiles);
    }
    function removeFile(uid) {
      const propFiles = props.fileList ?? [];
      let index = propFiles.findIndex((v) => v.uid === uid);
      if (index >= 0) {
        propFiles.splice(index, 1);
      }
      if (uploadFileEnum[uid]) {
        delete uploadFileEnum[uid];
      }
      emit("update:fileList", propFiles);
    }
    async function submit() {
      let result = true;
      const readyList = Object.values(uploadFileEnum);
      if (props.beforeUpload) {
        let res = await props.beforeUpload(readyList);
        result = typescript.isBoolean(res) ? res : result;
      }
      if (result) {
        readyList.forEach((item) => {
          if (typescript.isFunction(props.http)) {
            props.http(item);
          } else {
            item.upload();
          }
        });
      }
    }
    __expose({ submit });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-upload", { "is-disabled": _ctx.disabled }])
      }, [
        _ctx.type === "picture" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createVNode(uploadList_vue_vue_type_script_setup_true_lang.default, {
            disabled: _ctx.disabled,
            type: _ctx.type,
            previewList: previewList.value,
            uploadFileEnum,
            onRemove: removeFile
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(uploadChoose_vue_vue_type_script_setup_true_lang.default, {
                disabled: _ctx.disabled,
                type: _ctx.type,
                onChoose: uploadHandleClick
              }, vue.createSlots({
                default: vue.withCtx(() => [
                  _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true)
                ]),
                _: 2
              }, [
                _ctx.$slots["trigger"] ? {
                  name: "trigger",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "trigger")
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["disabled", "type"])
            ]),
            _: 3
          }, 8, ["disabled", "type", "previewList", "uploadFileEnum"]),
          vue.createElementVNode("div", _hoisted_1, [
            vue.renderSlot(_ctx.$slots, "tip")
          ])
        ], 64)) : vue.createCommentVNode("", true),
        _ctx.type === "list" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createVNode(uploadChoose_vue_vue_type_script_setup_true_lang.default, {
            disabled: _ctx.disabled,
            type: _ctx.type,
            onChoose: uploadHandleClick
          }, vue.createSlots({
            default: vue.withCtx(() => [
              _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true)
            ]),
            _: 2
          }, [
            _ctx.$slots["trigger"] ? {
              name: "trigger",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "trigger")
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["disabled", "type"]),
          vue.createElementVNode("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "tip")
          ]),
          vue.createVNode(uploadList_vue_vue_type_script_setup_true_lang.default, {
            disabled: _ctx.disabled,
            type: _ctx.type,
            previewList: previewList.value,
            uploadFileEnum,
            onRemove: removeFile
          }, null, 8, ["disabled", "type", "previewList", "uploadFileEnum"])
        ], 64)) : vue.createCommentVNode("", true),
        vue.withDirectives(vue.createElementVNode("input", {
          type: "file",
          ref_key: "inputRef",
          ref: inputRef,
          onChange: handleChange,
          multiple: _ctx.multiple,
          disabled: _ctx.disabled,
          accept: _ctx.accept,
          limit: _ctx.limit
        }, null, 40, _hoisted_3), [
          [vue.vShow, false]
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
