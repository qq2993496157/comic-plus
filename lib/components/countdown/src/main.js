"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/countdown.css");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const utils = require("./utils.js");
const main_props = require("./main.props.js");
const Countdown = vue.defineComponent({
  name: "CuCountdown",
  props: main_props.countdownProps,
  emits: main_props.countdownEmits,
  setup(props, { slots, emit }) {
    const temptime = vue.ref(getTime(props.value) - Date.now());
    const displayValue = vue.computed(() => utils.formatTime(temptime.value, props.format));
    const { pause, resume } = core.useIntervalFn(() => {
      const timestamp = getTime(props.value);
      let diff = timestamp - Date.now();
      if (diff <= 0) {
        emit("finish");
        pause();
      }
      temptime.value = diff <= 0 ? 0 : diff;
    }, 30);
    function getTime(time) {
      if (typescript.isString(time)) {
        if (isNaN(new Date(time).getTime())) {
          throw "times is not legitimate";
        }
      }
      return new Date(time).getTime();
    }
    vue.watch(
      () => props.value,
      () => {
        resume();
      },
      {
        immediate: true
      }
    );
    return () => {
      var _a, _b;
      return vue.h("span", { class: "cu-countdown" }, [
        ((_a = slots.prefix) == null ? void 0 : _a.call(slots)) ?? props.prefix,
        vue.h("span", { class: "cu-countdown_time" }, displayValue.value),
        ((_b = slots.suffix) == null ? void 0 : _b.call(slots)) ?? props.suffix
      ]);
    };
  }
});
exports.default = Countdown;
