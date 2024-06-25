import { defineComponent, inject, getCurrentInstance, ref, computed, onMounted, onBeforeUnmount, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, Fragment, createCommentVNode, unref, vShow, renderSlot } from "vue";
import "../style/avatar.css";
import { randomColor } from "../../../tools/tool.mjs";
import "../../../tools/request.mjs";
import { avatarProps } from "./main.props.mjs";
import { AVATARGROUP_PROVIDE } from "./type.mjs";
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 2,
  class: "cu-icon-avatar-filled avatar-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAvatar"
  },
  __name: "main",
  props: avatarProps,
  setup(__props) {
    const props = __props;
    const group = inject(AVATARGROUP_PROVIDE, void 0);
    const instance = getCurrentInstance();
    const loadType = ref("load");
    const avatarShape = computed(() => props.shape ?? (group == null ? void 0 : group.props.shape) ?? "circle");
    const show = computed(() => {
      if (group) {
        return group.showAll.value ? true : group.avatars.value.indexOf(instance.uid) < (group.props.count ?? (group == null ? void 0 : group.avatars.value.length));
      } else {
        return true;
      }
    });
    const avatarStyle = computed(() => {
      const max = Math.max(props.size ?? 0, (group == null ? void 0 : group.props.size) ?? 0);
      const size = max === 0 ? 40 : max;
      return {
        width: size + "px",
        height: size + "px",
        fontSize: size / 3 + "px",
        backgroundColor: backgroundColor.value
      };
    });
    const backgroundColor = computed(() => {
      if (!props.color)
        return void 0;
      if (props.color === "random")
        return randomColor();
      return props.color;
    });
    onMounted(() => {
      group == null ? void 0 : group.addAvatar(instance.uid);
    });
    onBeforeUnmount(() => {
      group == null ? void 0 : group.removeAvatar(instance.uid);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "avatar" }, {
        default: withCtx(() => {
          var _a;
          return [
            withDirectives(createElementVNode("span", {
              class: normalizeClass(["cu-avatar", avatarShape.value ? "is-" + avatarShape.value : void 0]),
              style: normalizeStyle(avatarStyle.value)
            }, [
              _ctx.src ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                loadType.value !== "loaded" ? (openBlock(), createElementBlock("i", {
                  key: 0,
                  class: normalizeClass(loadType.value === "error" ? "cu-icon-error-picture" : "cu-icon-picture")
                }, null, 2)) : createCommentVNode("", true),
                withDirectives(createElementVNode("img", {
                  src: _ctx.src,
                  onLoad: _cache[0] || (_cache[0] = ($event) => loadType.value = "loaded"),
                  onError: _cache[1] || (_cache[1] = ($event) => loadType.value = "error"),
                  style: normalizeStyle({ "object-fit": _ctx.fit ?? ((_a = unref(group)) == null ? void 0 : _a.props.fit) ?? "cover" })
                }, null, 44, _hoisted_1), [
                  [vShow, loadType.value === "loaded"]
                ])
              ], 64)) : _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock("i", _hoisted_2))
            ], 6), [
              [vShow, show.value]
            ])
          ];
        }),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
