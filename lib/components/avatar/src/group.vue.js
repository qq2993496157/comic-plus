"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/avatar.css");
const group_props = require("./group.props.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-avatar-group__container" };
const _hoisted_2 = {
  key: 0,
  class: "cu-icon-double-left"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAvatarGroup"
  },
  __name: "group",
  props: group_props.avatarGroupProps,
  emits: group_props.avatarGroupEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showAll = vue.ref(false);
    const avatars = vue.ref([]);
    const style = vue.computed(() => {
      return {
        "--cu-avatar-size": props.size + "px",
        "--cu-avatar-gap": getGap() + "px"
      };
    });
    function getGap() {
      const offset = props.offset ?? 0;
      return props.layout === "stack" ? 0 - props.size / 2 + offset : 4 + offset;
    }
    const surplus = vue.computed(() => {
      return avatars.value.length - props.count;
    });
    vue.watch(
      () => props.clickShowAll,
      (val) => {
        if (!val) {
          showAll.value = false;
        }
      }
    );
    function changeShowAll() {
      if (!props.clickShowAll)
        return;
      showAll.value = !showAll.value;
      emit("change-show", showAll.value);
    }
    function addAvatar(uid) {
      if (!avatars.value.includes(uid)) {
        avatars.value.push(uid);
      }
    }
    function removeAvatar(uid) {
      let idx = avatars.value.indexOf(uid);
      if (idx > 0) {
        avatars.value.splice(idx, 1);
      }
    }
    vue.provide(type.AVATARGROUP_PROVIDE, {
      props,
      addAvatar,
      removeAvatar,
      avatars,
      showAll
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-avatar-group", [{ shadow: _ctx.shadow }, _ctx.shape ? "is-" + _ctx.shape : void 0, _ctx.layout ? "mode-" + _ctx.layout : void 0]]),
        style: vue.normalizeStyle(style.value)
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default"),
          surplus.value > 0 ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(["cu-avatar-group__surplus", { "can-click": _ctx.clickShowAll }]),
            onClick: vue.withModifiers(changeShowAll, ["stop"])
          }, [
            showAll.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString("+" + surplus.value), 1)
            ], 64))
          ], 2)) : vue.createCommentVNode("", true)
        ])
      ], 6);
    };
  }
});
exports.default = _sfc_main;
