"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../progress/index.js");
const index$1 = require("../../preview-image/index.js");
const _hoisted_1 = {
  key: 1,
  class: "cu-icon-success-c success"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "progress" };
const _hoisted_4 = {
  key: 1,
  class: "cu-upload__pictures"
};
const _hoisted_5 = {
  key: 0,
  class: "progress"
};
const _hoisted_6 = {
  key: 1,
  class: "mask"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ vue.createElementVNode("li", { class: "choose-slot" }, null, -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuUploadList"
  },
  __name: "upload-list",
  props: {
    type: {
      type: String,
      required: true
    },
    previewList: Array,
    uploadFileEnum: {
      type: Object,
      required: true
    },
    disabled: Boolean
  },
  emits: ["remove", "choose"],
  setup(__props, { emit: __emit }) {
    const icons = {
      ready: "cu-icon-save",
      uploading: "cu-icon-upload",
      success: "cu-icon-check-one",
      fail: "cu-icon-close-one"
    };
    const props = __props;
    const emit = __emit;
    function previewImg(index2) {
      var _a;
      if (props.disabled)
        return;
      index$1.preview(
        (_a = props.previewList) == null ? void 0 : _a.map((v) => v.url),
        index2
      );
    }
    function remove(uid, index2) {
      if (props.disabled)
        return;
      emit("remove", uid, index2);
    }
    return (_ctx, _cache) => {
      return __props.type === "list" ? (vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
        key: 0,
        name: "list",
        class: "cu-upload__list",
        tag: "ul"
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.previewList, (file, index$12) => {
            var _a, _b;
            return vue.openBlock(), vue.createElementBlock("li", {
              key: file.uid || file.name
            }, [
              vue.createElementVNode("span", null, [
                file.uid && __props.uploadFileEnum[file.uid] ? (vue.openBlock(), vue.createElementBlock("i", {
                  key: 0,
                  class: vue.normalizeClass([__props.uploadFileEnum[file.uid].status, icons[__props.uploadFileEnum[file.uid].status]])
                }, null, 2)) : (vue.openBlock(), vue.createElementBlock("i", _hoisted_1))
              ]),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(["filename", (_a = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a.status])
              }, vue.toDisplayString(file.name), 3),
              vue.createElementVNode("i", {
                class: "delete cu-icon-delete",
                onClick: ($event) => remove(file.uid, index$12)
              }, null, 8, _hoisted_2),
              vue.createElementVNode("span", _hoisted_3, [
                ((_b = __props.uploadFileEnum[file.uid]) == null ? void 0 : _b.status) === "uploading" ? (vue.openBlock(), vue.createBlock(vue.unref(index.CuProgress), {
                  key: 0,
                  progress: __props.uploadFileEnum[file.uid].progress,
                  style: { "margin-top": "4px" }
                }, null, 8, ["progress"])) : vue.createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]),
        _: 1
      })) : __props.type === "picture" ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_4, [
        vue.createVNode(vue.TransitionGroup, { name: "list" }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.previewList, (file, index$12) => {
              var _a;
              return vue.openBlock(), vue.createElementBlock("li", {
                key: file.uid || file.name,
                class: vue.normalizeClass((_a = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a.status)
              }, [
                vue.createVNode(vue.Transition, { name: "cu-fade" }, {
                  default: vue.withCtx(() => {
                    var _a2;
                    return [
                      ((_a2 = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a2.status) === "uploading" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
                        vue.createVNode(vue.unref(index.CuProgress), {
                          size: "100",
                          type: "success",
                          "bar-type": "circle",
                          progress: __props.uploadFileEnum[file.uid].progress || 0
                        }, null, 8, ["progress"])
                      ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, [
                        vue.createElementVNode("i", {
                          class: "cu-icon-zoom-in",
                          onClick: ($event) => previewImg(index$12)
                        }, null, 8, _hoisted_7),
                        vue.createElementVNode("i", {
                          class: "cu-icon-delete",
                          onClick: ($event) => remove(file.uid, index$12)
                        }, null, 8, _hoisted_8)
                      ]))
                    ];
                  }),
                  _: 2
                }, 1024),
                vue.createElementVNode("img", {
                  src: file.url,
                  alt: ""
                }, null, 8, _hoisted_9)
              ], 2);
            }), 128))
          ]),
          _: 1
        }),
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_10
        ])
      ])) : vue.createCommentVNode("", true);
    };
  }
});
exports.default = _sfc_main;
