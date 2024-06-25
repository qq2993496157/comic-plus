"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/waterfall.css");
require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
const main_props = require("./main.props.js");
const Waterfall = vue.defineComponent({
  name: "CuWaterfall",
  props: main_props.waterfallProps,
  emits: main_props.waterfallEmits,
  setup(props, { slots, emit }) {
    const waterfallRef = vue.ref(null);
    const debounceSetStyle = tools.debounce(setWaterfallStyle);
    const { width, height } = core.useElementSize(waterfallRef);
    vue.watch([width, height], () => {
      debounceSetStyle();
    });
    function setWaterfallStyle() {
      if (!waterfallRef.value)
        return;
      let waterfallStyle = waterfallRef.value.getBoundingClientRect();
      let childrenList = new Array();
      let colNum;
      if (props.itemWidth) {
        colNum = Math.floor(waterfallStyle.width / props.itemWidth);
        colNum = Math.min(colNum, waterfallRef.value.children.length);
      } else {
        colNum = props.col;
      }
      for (let i = 0; i < colNum; i++) {
        childrenList.push(0);
      }
      let gutterSize = props.gutter;
      if (props.itemWidth) {
        gutterSize = (waterfallStyle.width - colNum * props.itemWidth) / (colNum - 1);
      }
      let list = Array.from(waterfallRef.value.children);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let itemRect = item.getBoundingClientRect();
        let maxIdx = tools.findIndexOfMinOrMax(childrenList);
        let w = props.itemWidth ? props.itemWidth : (waterfallStyle.width - props.gutter * (props.col - 1)) / props.col;
        let x = maxIdx * w + maxIdx * (gutterSize <= 0 ? props.gutter : gutterSize);
        let y = childrenList[maxIdx];
        item.style.setProperty("width", w + "px");
        item.style.setProperty("left", `${x}px`);
        item.style.setProperty("opacity", 1);
        item.style.setProperty("top", y - 30 + "px");
        item.style.setProperty("transform", `translateY(30px)`);
        childrenList[maxIdx] += itemRect.height + props.gutter;
      }
      waterfallRef.value.style.setProperty("height", Math.max(...childrenList) - props.gutter + "px");
      emit("update");
    }
    vue.onMounted(() => {
      setWaterfallStyle();
    });
    vue.onUpdated(() => {
      setWaterfallStyle();
    });
    return () => {
      return vue.h("div", { class: "cu-waterfall", ref: waterfallRef }, slots);
    };
  }
});
exports.default = Waterfall;
