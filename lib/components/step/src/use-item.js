"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const type = require("./type.js");
const useStepItem = (props) => {
  const instance = vue.getCurrentInstance();
  const { props: injectProps, addItem, removeItem, itemList, maxWidth } = vue.inject(type.STEP_PROVIDE);
  const isFinish = vue.computed(() => {
    if (!injectProps.active)
      return false;
    return itemList.value.findIndex((id) => id === instance.uid) < injectProps.active;
  });
  const isCurrent = vue.computed(() => {
    if (injectProps.active === null || injectProps.active === void 0)
      return false;
    return currentIndex.value === injectProps.active;
  });
  const currentIndex = vue.computed(() => {
    return itemList.value.findIndex((id) => id === instance.uid);
  });
  const currentIcon = vue.computed(() => {
    if (props.icon)
      return props.icon;
    if (isCurrent.value) {
      return props.error ? "cu-icon-close-filled" : false;
    }
    return isFinish.value ? "cu-icon-check-one" : false;
  });
  vue.onMounted(() => {
    addItem(instance.uid);
  });
  vue.onBeforeUnmount(() => {
    removeItem(instance.uid);
  });
  return {
    instance,
    injectProps,
    addItem,
    removeItem,
    itemList,
    isFinish,
    isCurrent,
    currentIndex,
    currentIcon,
    maxWidth
  };
};
exports.useStepItem = useStepItem;
