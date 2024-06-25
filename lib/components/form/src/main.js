"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/form.css");
const type = require("./type.js");
const main_props = require("./main.props.js");
const Form = vue.defineComponent({
  name: "CuForm",
  props: main_props.formProps,
  setup(props, { slots, expose }) {
    const itemInfoList = vue.ref([]);
    const originData = vue.ref({});
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
    vue.provide(type.FORM_PROVIDE, {
      props,
      itemValidatePush,
      itemValidateDelete
    });
    vue.onMounted(() => {
      originData.value = JSON.parse(JSON.stringify(props.model));
    });
    expose({
      validate,
      validateFields,
      clearValidates,
      resetFields
    });
    return () => {
      return vue.h(
        "form",
        { class: ["cu-form", "label-" + props.labelPosition, props.size], onsubmit: () => false },
        slots
      );
    };
  }
});
exports.default = Form;
