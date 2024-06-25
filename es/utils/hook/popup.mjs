import { ref, watch } from "vue";
import { isFunction } from "../typescript.mjs";
function usePopup(props, emit) {
  const visible = ref(false);
  const showMode = ref(false);
  const onAfterEnter = () => {
    visible.value = true;
  };
  const modeHandleClick = () => {
    if (!props.modeClose)
      return;
    close();
  };
  const close = () => {
    if (isFunction(props.beforeClose)) {
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
  watch(
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
export {
  usePopup
};
