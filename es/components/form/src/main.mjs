import { defineComponent, ref, provide, onMounted, h } from "vue";
import "../style/form.css";
import { FORM_PROVIDE } from "./type.mjs";
import { formProps } from "./main.props.mjs";
const Form = defineComponent({
  name: "CuForm",
  props: formProps,
  setup(props, { slots, expose }) {
    const itemInfoList = ref([]);
    const originData = ref({});
    function validate(callback) {
      const promises = itemInfoList.value.map((item) => item.validate());
      Promise.all(promises).then(() => {
        callback(true);
      }).catch(() => {
        callback(false);
      });
    }
    function validateFields(names, callback) {
      if (!props.rules)
        return;
      const promises = itemInfoList.value.filter((item) => names.includes(item.prop)).map((item) => item.validate());
      Promise.all(promises).then(() => {
        callback(true);
      }).catch(() => {
        callback(false);
      });
    }
    function clearValidates(names) {
      const promises = itemInfoList.value.filter(names ? (item) => names.includes(item.prop) : Boolean);
      promises.forEach((field) => {
        field.clearValidate();
      });
    }
    function resetFields(names) {
      const promises = itemInfoList.value.filter(names ? (item) => names.includes(item.prop) : Boolean);
      promises.forEach((field) => {
        field.clearValidate();
      });
      Object.assign(props.model, originData.value);
    }
    function itemValidatePush(item) {
      let index = itemInfoList.value.findIndex((v) => v.prop === item.prop);
      if (index >= 0) {
        itemInfoList.value.splice(index, 1);
      }
      itemInfoList.value.push(item);
    }
    function itemValidateDelete(uid) {
      let index = itemInfoList.value.findIndex((v) => v.uid === uid);
      if (index >= 0) {
        itemInfoList.value.splice(index, 1);
      }
    }
    provide(FORM_PROVIDE, {
      props,
      itemValidatePush,
      itemValidateDelete
    });
    onMounted(() => {
      originData.value = JSON.parse(JSON.stringify(props.model));
    });
    expose({
      validate,
      validateFields,
      clearValidates,
      resetFields
    });
    return () => {
      return h(
        "form",
        { class: ["cu-form", "label-" + props.labelPosition, props.size], onsubmit: () => false },
        slots
      );
    };
  }
});
export {
  Form as default
};
