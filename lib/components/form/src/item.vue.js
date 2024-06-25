"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const Schema = require("async-validator");
const item_props = require("./item.props.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("i", { class: "asterisk" }, null, -1);
const _hoisted_2 = { class: "cu-form-item__content" };
const _hoisted_3 = {
  key: 0,
  class: "cu-form__error"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuFormItem"
  },
  __name: "item",
  props: item_props.formItemProps,
  setup(__props) {
    const props = __props;
    const instance = vue.getCurrentInstance();
    const { props: injectProps, itemValidatePush, itemValidateDelete } = vue.inject(type.FORM_PROVIDE);
    const errorMsg = vue.ref("");
    const descriptor = vue.computed(() => {
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
    const isRequired = vue.computed(() => {
      let reqArr = descriptor.value.map((v) => {
        return v == null ? void 0 : v.required;
      }).filter(Boolean);
      return props.required || reqArr.length > 0;
    });
    const labelStyle = vue.computed(() => {
      if (injectProps.labelPosition && injectProps.labelPosition != "top") {
        return {
          width: props.labelWidth ?? injectProps.labelWidth ?? void 0
        };
      }
      return void 0;
    });
    const trigger = vue.computed(() => {
      if (!props.prop)
        return [];
      let arr = descriptor.value.filter((v) => v.hasOwnProperty("trigger")).map((v) => v.trigger);
      return arr || [];
    });
    function returnTypeof(val) {
      if (typeof val === "object") {
        return typescript.isArray(val) ? "array" : "object";
      }
      return typeof val;
    }
    function validate() {
      var _a;
      if (props.prop) {
        let t = (_a = injectProps.model) == null ? void 0 : _a[props.prop];
        let k = props.prop;
        if (typescript.isNumber(props.propIndex)) {
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
    vue.provide(type.FORMITEM_PROVIDE, { trigger: trigger.value, fn: validate });
    vue.onMounted(() => {
      if (props.prop && itemValidatePush) {
        let k = props.prop;
        if (typescript.isNumber(props.propIndex)) {
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
    vue.onUnmounted(() => {
      itemValidateDelete == null ? void 0 : itemValidateDelete(instance.uid);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-form-item", { required: isRequired.value && !vue.unref(injectProps).hideRequiredAsterisk, "is-error": errorMsg.value }])
      }, [
        vue.createElementVNode("span", {
          class: "label",
          style: vue.normalizeStyle(labelStyle.value)
        }, [
          _hoisted_1,
          vue.renderSlot(_ctx.$slots, "label", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ], 4),
        vue.createElementVNode("span", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createVNode(vue.Transition, { name: "cu-error" }, {
            default: vue.withCtx(() => [
              errorMsg.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(errorMsg.value), 1)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
