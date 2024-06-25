import { defineComponent, ref, computed, watch, provide, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, withModifiers, Fragment, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/avatar.css";
import { avatarGroupProps, avatarGroupEmits } from "./group.props.mjs";
import { AVATARGROUP_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-avatar-group__container" };
const _hoisted_2 = {
  key: 0,
  class: "cu-icon-double-left"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAvatarGroup"
  },
  __name: "group",
  props: avatarGroupProps,
  emits: avatarGroupEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showAll = ref(false);
    const avatars = ref([]);
    const style = computed(() => {
      return {
        "--cu-avatar-size": props.size + "px",
        "--cu-avatar-gap": getGap() + "px"
      };
    });
    function getGap() {
      const offset = props.offset ?? 0;
      return props.layout === "stack" ? 0 - props.size / 2 + offset : 4 + offset;
    }
    const surplus = computed(() => {
      return avatars.value.length - props.count;
    });
    watch(
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
    provide(AVATARGROUP_PROVIDE, {
      props,
      addAvatar,
      removeAvatar,
      avatars,
      showAll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-avatar-group", [{ shadow: _ctx.shadow }, _ctx.shape ? "is-" + _ctx.shape : void 0, _ctx.layout ? "mode-" + _ctx.layout : void 0]]),
        style: normalizeStyle(style.value)
      }, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default"),
          surplus.value > 0 ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["cu-avatar-group__surplus", { "can-click": _ctx.clickShowAll }]),
            onClick: withModifiers(changeShowAll, ["stop"])
          }, [
            showAll.value ? (openBlock(), createElementBlock("span", _hoisted_2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString("+" + surplus.value), 1)
            ], 64))
          ], 2)) : createCommentVNode("", true)
        ])
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
