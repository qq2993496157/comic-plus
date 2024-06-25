import { defineComponent, provide, h } from "vue";
import "../style/radio.css";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import "../../../utils/config.mjs";
import { radioGroupProps, radioGroupEmits } from "./group.props.mjs";
import { RADIOGROUP_PROVIDE } from "./type.mjs";
const RadioGroup = defineComponent({
  name: "CuRadioGroup",
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = useItemValidate();
    function changeItemCheck(value) {
      emit("update:modelValue", value);
      emit("change", value);
      itemValidate("change");
    }
    provide(RADIOGROUP_PROVIDE, {
      changeItemCheck,
      props
    });
    return () => {
      return h("span", { class: "cu-radio-group" }, slots);
    };
  }
});
export {
  RadioGroup as default
};
