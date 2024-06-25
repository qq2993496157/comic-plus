"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const typescript = require("../typescript.js");
function usePopup(props, emit) {
  const visible = vue.ref(false);
  const showMode = vue.ref(false);
  const onAfterEnter = () => {
    visible.value = true;
  };
  const modeHandleClick = () => {
    if (!props.modeClose)
      return;
    close();
  };
  const close = () => {
    if (typescript.isFunction(props.beforeClose)) {
      props.beforeClose(done);
    } else {
      done();
    }
  };
  const done = () => {
    visible.value = false;
  };
  const onAfterLeave = () => {
    showMode.value = false;
    emit == null ? void 0 : emit("update:modelValue", false);
  };
  vue.watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        showMode.value = true;
      } else {
        visible.value = false;
      }
    }
  );
  return {
    visible,
    showMode,
    onAfterEnter,
    modeHandleClick,
    onAfterLeave,
    close
  };
}
exports.usePopup = usePopup;
