"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/elevator.css");
const index = require("../../scrollbar/index.js");
require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-elevator__menu-list" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuElevator"
  },
  __name: "main",
  props: main_props.elevatorProps,
  emits: main_props.elevatorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const itemList = vue.ref([]);
    const container = vue.ref(null);
    const scrollBarRef = vue.ref(null);
    const elevatorRef = vue.ref(null);
    const currentName = vue.ref("");
    const showMenu = vue.ref(true);
    const onScroll = tools.debounce(setActive);
    vue.watch(currentName, (val) => {
      emit("change", val);
    });
    const menuContext = vue.computed(() => {
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
    const menuStyle = vue.computed(() => {
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
    vue.provide(type.ELEVATOR_PROVIDE, {
      setItem,
      removeItem
    });
    __expose({ changeItemActive: menuClick });
    vue.onMounted(() => {
      setActive();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "cu-elevator",
        ref_key: "elevatorRef",
        ref: elevatorRef,
        style: vue.normalizeStyle({ height: _ctx.height })
      }, [
        _ctx.hasMenu ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["cu-elevator__menu", [{ "is-float": _ctx.postion !== "none" }, menuContext.value.class]]),
          style: vue.normalizeStyle(menuStyle.value)
        }, [
          vue.renderSlot(_ctx.$slots, "menu", {}, () => [
            vue.createVNode(vue.Transition, {
              name: menuContext.value.transitionName
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode("ul", _hoisted_1, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(itemList.value, (item) => {
                    return vue.openBlock(), vue.createElementBlock("li", {
                      class: vue.normalizeClass({ "is-active": currentName.value === item.name }),
                      onClick: ($event) => menuClick(item.name)
                    }, vue.toDisplayString(item.label), 11, _hoisted_2);
                  }), 256))
                ], 512), [
                  [vue.vShow, showMenu.value || _ctx.postion === "none"]
                ])
              ]),
              _: 1
            }, 8, ["name"]),
            _ctx.fold && _ctx.postion !== "none" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "fold",
              onClick: _cache[0] || (_cache[0] = ($event) => foldClick())
            }, [
              vue.createElementVNode("i", {
                class: vue.normalizeClass(menuContext.value.iconName)
              }, null, 2)
            ])) : vue.createCommentVNode("", true)
          ])
        ], 6)) : vue.createCommentVNode("", true),
        vue.createVNode(vue.unref(index.CuScrollbar), {
          onScroll: vue.unref(onScroll),
          ref_key: "scrollBarRef",
          ref: scrollBarRef,
          display: _ctx.scrollbarDisplay
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              class: "cu-elevator__container",
              ref_key: "container",
              ref: container
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 512)
          ]),
          _: 3
        }, 8, ["onScroll", "display"])
      ], 4);
    };
  }
});
exports.default = _sfc_main;
