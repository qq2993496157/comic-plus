import { defineComponent, ref, computed, watch, h } from "vue";
import { useIntervalFn } from "@vueuse/core";
import "../style/countdown.css";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { formatTime } from "./utils.mjs";
import { countdownProps, countdownEmits } from "./main.props.mjs";
const Countdown = defineComponent({
  name: "CuCountdown",
  props: countdownProps,
  emits: countdownEmits,
  setup(props, { slots, emit }) {
    const temptime = ref(getTime(props.value) - Date.now());
    const displayValue = computed(() => formatTime(temptime.value, props.format));
    const { pause, resume } = useIntervalFn(() => {
      const timestamp = getTime(props.value);
      let diff = timestamp - Date.now();
      if (diff <= 0) {
        emit("finish");
        pause();
      }
      temptime.value = diff <= 0 ? 0 : diff;
    }, 30);
    function getTime(time) {
      if (isString(time)) {
        if (isNaN(new Date(time).getTime())) {
          throw "times is not legitimate";
        }
      }
      return new Date(time).getTime();
    }
    watch(
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
      return h("span", { class: "cu-countdown" }, [
        ((_a = slots.prefix) == null ? void 0 : _a.call(slots)) ?? props.prefix,
        h("span", { class: "cu-countdown_time" }, displayValue.value),
        ((_b = slots.suffix) == null ? void 0 : _b.call(slots)) ?? props.suffix
      ]);
    };
  }
});
export {
  Countdown as default
};
