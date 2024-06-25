import { defineComponent, h, provide, ref, onMounted } from 'vue';
import '../style/form.css';
import { FORM_PROVIDE, ItemInfoProp } from './type';
import { formProps } from './main.props';

export default defineComponent({
  name: 'CuForm',
  props: formProps,

  setup(props, { slots, expose }) {
    const itemInfoList = ref<ItemInfoProp[]>([]);
    const originData = ref({});

    function validate(callback: (valid: boolean) => void) {
      const promises = itemInfoList.value.map((item: ItemInfoProp) => item.validate());
      Promise.all(promises)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    }

    function validateFields(names: string[], callback: (valid: boolean) => void) {
      if (!props.rules) return;
      const promises = itemInfoList.value
        .filter((item: ItemInfoProp) => names.includes(item.prop))
        .map((item: ItemInfoProp) => item.validate());
      Promise.all(promises)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    }

    function clearValidates(names?: string[]) {
      const promises = itemInfoList.value.filter(names ? (item: ItemInfoProp) => names.includes(item.prop) : Boolean);
      promises.forEach((field: ItemInfoProp) => {
        field.clearValidate();
      });
    }

    function resetFields(names?: string[]) {
      const promises = itemInfoList.value.filter(names ? (item: ItemInfoProp) => names.includes(item.prop) : Boolean);
      promises.forEach((field: ItemInfoProp) => {
        field.clearValidate();
      });
      Object.assign(props.model, originData.value);
    }

    function itemValidatePush(item: ItemInfoProp) {
      let index = itemInfoList.value.findIndex((v: ItemInfoProp) => v.prop === item.prop);
      if (index >= 0) {
        itemInfoList.value.splice(index, 1);
      }
      itemInfoList.value.push(item);
    }

    function itemValidateDelete(uid: number) {
      let index = itemInfoList.value.findIndex((v: ItemInfoProp) => v.uid === uid);
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
        'form',
        { class: ['cu-form', 'label-' + props.labelPosition, props.size], onsubmit: () => false },
        slots
      );
    };
  }
});
