import { defineComponent, openBlock, createBlock, TransitionGroup, withCtx, createElementBlock, Fragment, renderList, createElementVNode, normalizeClass, toDisplayString, unref, createCommentVNode, createVNode, Transition, renderSlot } from "vue";
import { CuProgress } from "../../progress/index.mjs";
import { preview } from "../../preview-image/index.mjs";
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
const _hoisted_10 = /* @__PURE__ */ createElementVNode("li", { class: "choose-slot" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    function previewImg(index) {
      var _a;
      if (props.disabled)
        return;
      preview(
        (_a = props.previewList) == null ? void 0 : _a.map((v) => v.url),
        index
      );
    }
    function remove(uid, index) {
      if (props.disabled)
        return;
      emit("remove", uid, index);
    }
    return (_ctx, _cache) => {
      return __props.type === "list" ? (openBlock(), createBlock(TransitionGroup, {
        key: 0,
        name: "list",
        class: "cu-upload__list",
        tag: "ul"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.previewList, (file, index) => {
            var _a, _b;
            return openBlock(), createElementBlock("li", {
              key: file.uid || file.name
            }, [
              createElementVNode("span", null, [
                file.uid && __props.uploadFileEnum[file.uid] ? (openBlock(), createElementBlock("i", {
                  key: 0,
                  class: normalizeClass([__props.uploadFileEnum[file.uid].status, icons[__props.uploadFileEnum[file.uid].status]])
                }, null, 2)) : (openBlock(), createElementBlock("i", _hoisted_1))
              ]),
              createElementVNode("span", {
                class: normalizeClass(["filename", (_a = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a.status])
              }, toDisplayString(file.name), 3),
              createElementVNode("i", {
                class: "delete cu-icon-delete",
                onClick: ($event) => remove(file.uid, index)
              }, null, 8, _hoisted_2),
              createElementVNode("span", _hoisted_3, [
                ((_b = __props.uploadFileEnum[file.uid]) == null ? void 0 : _b.status) === "uploading" ? (openBlock(), createBlock(unref(CuProgress), {
                  key: 0,
                  progress: __props.uploadFileEnum[file.uid].progress,
                  style: { "margin-top": "4px" }
                }, null, 8, ["progress"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]),
        _: 1
      })) : __props.type === "picture" ? (openBlock(), createElementBlock("ul", _hoisted_4, [
        createVNode(TransitionGroup, { name: "list" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.previewList, (file, index) => {
              var _a;
              return openBlock(), createElementBlock("li", {
                key: file.uid || file.name,
                class: normalizeClass((_a = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a.status)
              }, [
                createVNode(Transition, { name: "cu-fade" }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      ((_a2 = __props.uploadFileEnum[file.uid]) == null ? void 0 : _a2.status) === "uploading" ? (openBlock(), createElementBlock("span", _hoisted_5, [
                        createVNode(unref(CuProgress), {
                          size: "100",
                          type: "success",
                          "bar-type": "circle",
                          progress: __props.uploadFileEnum[file.uid].progress || 0
                        }, null, 8, ["progress"])
                      ])) : (openBlock(), createElementBlock("span", _hoisted_6, [
                        createElementVNode("i", {
                          class: "cu-icon-zoom-in",
                          onClick: ($event) => previewImg(index)
                        }, null, 8, _hoisted_7),
                        createElementVNode("i", {
                          class: "cu-icon-delete",
                          onClick: ($event) => remove(file.uid, index)
                        }, null, 8, _hoisted_8)
                      ]))
                    ];
                  }),
                  _: 2
                }, 1024),
                createElementVNode("img", {
                  src: file.url,
                  alt: ""
                }, null, 8, _hoisted_9)
              ], 2);
            }), 128))
          ]),
          _: 1
        }),
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_10
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
