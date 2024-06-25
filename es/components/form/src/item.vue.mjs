import { defineComponent, getCurrentInstance, inject, ref, computed, provide, onMounted, onUnmounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createVNode, Transition, withCtx, createCommentVNode } from "vue";
import { FORM_PROVIDE, FORMITEM_PROVIDE } from "./type.mjs";
import { isNumber, isArray } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import Schema from "async-validator";
import { formItemProps } from "./item.props.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("i", { class: "asterisk" }, null, -1);
const _hoisted_2 = { class: "cu-form-item__content" };
const _hoisted_3 = {
  key: 0,
  class: "cu-form__error"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuFormItem"
  },
  __name: "item",
  props: formItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const { props: injectProps, itemValidatePush, itemValidateDelete } = inject(FORM_PROVIDE);
    const errorMsg = ref("");
    const descriptor = computed(() => {
      var _a, _b;
      let arr = [];
      if (props.rules) {
        arr = arr.concat(props.rules);
      }
      if (props.prop && ((_a = injectProps.rules) == null ? void 0 : _a[props.prop])) {
        arr = arr.concat((_b = injectProps.rules) == null ? void 0 : _b[props.prop]);
      }
      return arr || [];
    });
    const isRequired = computed(() => {
      let reqArr = descriptor.value.map((v) => {
        return v == null ? void 0 : v.required;
      }).filter(Boolean);
      return props.required || reqArr.length > 0;
    });
    const labelStyle = computed(() => {
      if (injectProps.labelPosition && injectProps.labelPosition != "top") {
        return {
          width: props.labelWidth ?? injectProps.labelWidth ?? void 0
        };
      }
      return void 0;
    });
    const trigger = computed(() => {
      if (!props.prop)
        return [];
      let arr = descriptor.value.filter((v) => v.hasOwnProperty("trigger")).map((v) => v.trigger);
      return arr || [];
    });
    function returnTypeof(val) {
      if (typeof val === "object") {
        return isArray(val) ? "array" : "object";
      }
      return typeof val;
    }
    function validate() {
      var _a;
      if (props.prop) {
        let t = (_a = injectProps.model) == null ? void 0 : _a[props.prop];
        let k = props.prop;
        if (isNumber(props.propIndex)) {
          t = t[props.propIndex];
          k = k + "." + props.propIndex;
        }
        let fied = Object.assign({}, { type: returnTypeof(t) }, { [k]: descriptor.value });
        const validator = new Schema(fied);
        return validator.validate({ [k]: t }, { firstFields: true }, (err) => {
          errorMsg.value = "";
          if (err) {
            errorMsg.value = err[0].message || "";
            return;
          }
        });
      } else {
        return true;
      }
    }
    function clearValidate() {
      errorMsg.value = "";
    }
    provide(FORMITEM_PROVIDE, { trigger: trigger.value, fn: validate });
    onMounted(() => {
      if (props.prop && itemValidatePush) {
        let k = props.prop;
        if (isNumber(props.propIndex)) {
          k = k + "." + props.propIndex;
        }
        itemValidatePush == null ? void 0 : itemValidatePush({
          uid: instance.uid,
          prop: k,
          validate,
          clearValidate
        });
      }
    });
    onUnmounted(() => {
      itemValidateDelete == null ? void 0 : itemValidateDelete(instance.uid);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-form-item", { required: isRequired.value && !unref(injectProps).hideRequiredAsterisk, "is-error": errorMsg.value }])
      }, [
        createElementVNode("span", {
          class: "label",
          style: normalizeStyle(labelStyle.value)
        }, [
          _hoisted_1,
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 4),
        createElementVNode("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(Transition, { name: "cu-error" }, {
            default: withCtx(() => [
              errorMsg.value ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(errorMsg.value), 1)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
