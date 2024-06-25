"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/avatar.css");
const tool = require("../../../tools/tool.js");
require("../../../tools/request.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 2,
  class: "cu-icon-avatar-filled avatar-icon"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAvatar"
  },
  __name: "main",
  props: main_props.avatarProps,
  setup(__props) {
    const props = __props;
    const group = vue.inject(type.AVATARGROUP_PROVIDE, void 0);
    const instance = vue.getCurrentInstance();
    const loadType = vue.ref("load");
    const avatarShape = vue.computed(() => props.shape ?? (group == null ? void 0 : group.props.shape) ?? "circle");
    const show = vue.computed(() => {
      if (group) {
        return group.showAll.value ? true : group.avatars.value.indexOf(instance.uid) < (group.props.count ?? (group == null ? void 0 : group.avatars.value.length));
      } else {
        return true;
      }
    });
    const avatarStyle = vue.computed(() => {
      const max = Math.max(props.size ?? 0, (group == null ? void 0 : group.props.size) ?? 0);
      const size = max === 0 ? 40 : max;
      return {
        width: size + "px",
        height: size + "px",
        fontSize: size / 3 + "px",
        backgroundColor: backgroundColor.value
      };
    });
    const backgroundColor = vue.computed(() => {
      if (!props.color)
        return void 0;
      if (props.color === "random")
        return tool.randomColor();
      return props.color;
    });
    vue.onMounted(() => {
      group == null ? void 0 : group.addAvatar(instance.uid);
    });
    vue.onBeforeUnmount(() => {
      group == null ? void 0 : group.removeAvatar(instance.uid);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, { name: "avatar" }, {
        default: vue.withCtx(() => {
          var _a;
          return [
            vue.withDirectives(vue.createElementVNode("span", {
              class: vue.normalizeClass(["cu-avatar", avatarShape.value ? "is-" + avatarShape.value : void 0]),
              style: vue.normalizeStyle(avatarStyle.value)
            }, [
              _ctx.src ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                loadType.value !== "loaded" ? (vue.openBlock(), vue.createElementBlock("i", {
                  key: 0,
                  class: vue.normalizeClass(loadType.value === "error" ? "cu-icon-error-picture" : "cu-icon-picture")
                }, null, 2)) : vue.createCommentVNode("", true),
                vue.withDirectives(vue.createElementVNode("img", {
                  src: _ctx.src,
                  onLoad: _cache[0] || (_cache[0] = ($event) => loadType.value = "loaded"),
                  onError: _cache[1] || (_cache[1] = ($event) => loadType.value = "error"),
                  style: vue.normalizeStyle({ "object-fit": _ctx.fit ?? ((_a = vue.unref(group)) == null ? void 0 : _a.props.fit) ?? "cover" })
                }, null, 44, _hoisted_1), [
                  [vue.vShow, loadType.value === "loaded"]
                ])
              ], 64)) : _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : (vue.openBlock(), vue.createElementBlock("i", _hoisted_2))
            ], 6), [
              [vue.vShow, show.value]
            ])
          ];
        }),
        _: 3
      });
    };
  }
});
exports.default = _sfc_main;
