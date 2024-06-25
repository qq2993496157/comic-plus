import { inject, computed } from "vue";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { RADIOGROUP_PROVIDE } from "./type.mjs";
const useRadio = (props, emit) => {
  const { itemValidate } = useItemValidate();
  const { SIZE } = useConfig();
  const radioGroup = inject(RADIOGROUP_PROVIDE, void 0);
  const form = inject(FORM_PROVIDE, void 0);
  const currentSize = computed(() => {
    return props.size ?? (radioGroup == null ? void 0 : radioGroup.props.size) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
  });
  const isCheck = computed(() => {
    return radioGroup ? radioGroup.props.modelValue === props.value : props.modelValue === props.value;
  });
  function changeValue() {
    if (radioGroup) {
      radioGroup.changeItemCheck(props.value);
      return;
    }
    emit("update:modelValue", props.value);
    emit("change", isCheck.value);
    itemValidate("change");
  }
  return {
    currentSize,
    isCheck,
    changeValue
  };
};
export {
  useRadio
};
