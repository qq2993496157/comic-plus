import { defineComponent, ref, watch, computed, provide, onMounted, openBlock, createElementBlock, normalizeStyle, normalizeClass, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, Fragment, renderList, toDisplayString, vShow, createCommentVNode, unref } from "vue";
import "../style/elevator.css";
import { CuScrollbar } from "../../scrollbar/index.mjs";
import "../../../utils/config.mjs";
import { debounce } from "../../../utils/tools.mjs";
import { elevatorProps, elevatorEmits } from "./main.props.mjs";
import { ELEVATOR_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "cu-elevator__menu-list" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuElevator"
  },
  __name: "main",
  props: elevatorProps,
  emits: elevatorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const itemList = ref([]);
    const container = ref(null);
    const scrollBarRef = ref(null);
    const elevatorRef = ref(null);
    const currentName = ref("");
    const showMenu = ref(true);
    const onScroll = debounce(setActive);
    watch(currentName, (val) => {
      emit("change", val);
    });
    const menuContext = computed(() => {
      if (props.postion.indexOf("top") >= 0) {
        return {
          class: "reversal",
          transitionName: "cu-zoom-top",
          iconName: "cu-icon-down-filled"
        };
      } else if (props.postion.indexOf("bottom") >= 0) {
        return {
          class: "",
          transitionName: "cu-zoom-bottom",
          iconName: "cu-icon-up-filled"
        };
      } else {
        return {
          class: "",
          transitionName: "cu-zoom-bottom",
          iconName: "cu-icon-up-filled"
        };
      }
    });
    const menuStyle = computed(() => {
      if (props.postion === "none")
        return void 0;
      let obj = {};
      if (props.postion) {
        props.postion.split("-").forEach((item) => {
          obj[item] = "20px";
        });
      }
      obj["--cu-elevator-menu-size"] = props.menuSize;
      return obj;
    });
    function menuClick(name) {
      let item = Array.from(container.value.children).find((v) => {
        let vName = v.getAttribute("elevator-name");
        if (vName === name) {
          return v;
        }
      });
      currentName.value = name;
      const Reat = container.value.getBoundingClientRect();
      let itemTop = item.getBoundingClientRect().top;
      scrollBarRef.value.setBarTop(itemTop - Reat.top);
    }
    function setActive() {
      var _a;
      const Reat = (_a = elevatorRef.value) == null ? void 0 : _a.getBoundingClientRect();
      let arr = Array.from(container.value.children);
      for (let i = arr.length - 1; i >= 0; i--) {
        let item = arr[i];
        if (item.getBoundingClientRect().top - Reat.top - props.offset <= 0) {
          currentName.value = item.getAttribute("elevator-name");
          break;
        }
        if (i === 0) {
          currentName.value = item.getAttribute("elevator-name");
        }
      }
    }
    function foldClick() {
      showMenu.value = !showMenu.value;
    }
    function setItem(instance) {
      itemList.value.push(instance);
    }
    function removeItem(uid) {
      itemList.value.splice(
        itemList.value.findIndex((v) => v.uid === uid),
        1
      );
    }
    provide(ELEVATOR_PROVIDE, {
      setItem,
      removeItem
    });
    __expose({ changeItemActive: menuClick });
    onMounted(() => {
      setActive();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "cu-elevator",
        ref_key: "elevatorRef",
        ref: elevatorRef,
        style: normalizeStyle({ height: _ctx.height })
      }, [
        _ctx.hasMenu ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["cu-elevator__menu", [{ "is-float": _ctx.postion !== "none" }, menuContext.value.class]]),
          style: normalizeStyle(menuStyle.value)
        }, [
          renderSlot(_ctx.$slots, "menu", {}, () => [
            createVNode(Transition, {
              name: menuContext.value.transitionName
            }, {
              default: withCtx(() => [
                withDirectives(createElementVNode("ul", _hoisted_1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(itemList.value, (item) => {
                    return openBlock(), createElementBlock("li", {
                      class: normalizeClass({ "is-active": currentName.value === item.name }),
                      onClick: ($event) => menuClick(item.name)
                    }, toDisplayString(item.label), 11, _hoisted_2);
                  }), 256))
                ], 512), [
                  [vShow, showMenu.value || _ctx.postion === "none"]
                ])
              ]),
              _: 1
            }, 8, ["name"]),
            _ctx.fold && _ctx.postion !== "none" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "fold",
              onClick: _cache[0] || (_cache[0] = ($event) => foldClick())
            }, [
              createElementVNode("i", {
                class: normalizeClass(menuContext.value.iconName)
              }, null, 2)
            ])) : createCommentVNode("", true)
          ])
        ], 6)) : createCommentVNode("", true),
        createVNode(unref(CuScrollbar), {
          onScroll: unref(onScroll),
          ref_key: "scrollBarRef",
          ref: scrollBarRef,
          display: _ctx.scrollbarDisplay
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: "cu-elevator__container",
              ref_key: "container",
              ref: container
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 512)
          ]),
          _: 3
        }, 8, ["onScroll", "display"])
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
