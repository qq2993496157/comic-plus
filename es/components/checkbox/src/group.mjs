import { defineComponent, ref, computed, provide, h } from "vue";
import { CHECKBOXGROUP_PROVIDE } from "./type.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import "../../../utils/config.mjs";
import { checkboxGroupProps, checkboxGroupEmits } from "./group.props.mjs";
const CheckboxGroup = defineComponent({
  name: "CuCheckboxGroup",
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = useItemValidate();
    const activeValue = ref(props.modelValue);
    function changeItemCheck(val, value) {
      if (val) {
        activeValue.value.push(value);
      } else {
        activeValue.value.splice(
          activeValue.value.findIndex((v) => v === value),
          1
        );
      }
      emit("update:modelValue", activeValue.value);
      emit("change", activeValue.value);
      itemValidate("change");
    }
    const groupSize = computed(() => props.size);
    provide(CHECKBOXGROUP_PROVIDE, {
      groupSize,
      activeValue,
      changeItemCheck
    });
    return () => {
      return h("span", { class: "cu-checkbox-group" }, slots);
    };
  }
});
export {
  CheckboxGroup as default
};
