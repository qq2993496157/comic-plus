"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _404_vue_vue_type_script_setup_true_lang = require("../svg/404.vue.js");
const _500_vue_vue_type_script_setup_true_lang = require("../svg/500.vue.js");
const noData_vue_vue_type_script_setup_true_lang = require("../svg/no-data.vue.js");
const noRecord_vue_vue_type_script_setup_true_lang = require("../svg/no-record.vue.js");
const noPremiss_vue_vue_type_script_setup_true_lang = require("../svg/no-premiss.vue.js");
const noCollect_vue_vue_type_script_setup_true_lang = require("../svg/no-collect.vue.js");
const noSearch_vue_vue_type_script_setup_true_lang = require("../svg/no-search.vue.js");
const noMessage_vue_vue_type_script_setup_true_lang = require("../svg/no-message.vue.js");
const noAddress_vue_vue_type_script_setup_true_lang = require("../svg/no-address.vue.js");
const noEval_vue_vue_type_script_setup_true_lang = require("../svg/no-eval.vue.js");
const noWeb_vue_vue_type_script_setup_true_lang = require("../svg/no-web.vue.js");
const pageError_vue_vue_type_script_setup_true_lang = require("../svg/page-error.vue.js");
const Atlas = vue.defineComponent({
  name: "CuAtlas",
  components: {
    Atlas404: _404_vue_vue_type_script_setup_true_lang.default,
    Atlas500: _500_vue_vue_type_script_setup_true_lang.default,
    AtlasNoData: noData_vue_vue_type_script_setup_true_lang.default,
    AtlasNoRecord: noRecord_vue_vue_type_script_setup_true_lang.default,
    AtlasNoPremiss: noPremiss_vue_vue_type_script_setup_true_lang.default,
    AtlasNoCollect: noCollect_vue_vue_type_script_setup_true_lang.default,
    AtlasNoSearch: noSearch_vue_vue_type_script_setup_true_lang.default,
    AtlasNoMessage: noMessage_vue_vue_type_script_setup_true_lang.default,
    AtlasNoWeb: noWeb_vue_vue_type_script_setup_true_lang.default,
    AtlasNoAddress: noAddress_vue_vue_type_script_setup_true_lang.default,
    AtlasNoEval: noEval_vue_vue_type_script_setup_true_lang.default,
    AtlasPageError: pageError_vue_vue_type_script_setup_true_lang.default
  },
  props: {
    svg: String,
    size: {
      type: [String, Number],
      default: 200
    }
  },
  setup(props, { slots }) {
    const atlasEnum = {
      404: _404_vue_vue_type_script_setup_true_lang.default,
      500: _500_vue_vue_type_script_setup_true_lang.default,
      ["no-data"]: noData_vue_vue_type_script_setup_true_lang.default,
      ["no-record"]: noRecord_vue_vue_type_script_setup_true_lang.default,
      ["no-premiss"]: noPremiss_vue_vue_type_script_setup_true_lang.default,
      ["no-collect"]: noCollect_vue_vue_type_script_setup_true_lang.default,
      ["no-search"]: noSearch_vue_vue_type_script_setup_true_lang.default,
      ["no-message"]: noMessage_vue_vue_type_script_setup_true_lang.default,
      ["no-web"]: noWeb_vue_vue_type_script_setup_true_lang.default,
      ["no-address"]: noAddress_vue_vue_type_script_setup_true_lang.default,
      ["no-eval"]: noEval_vue_vue_type_script_setup_true_lang.default,
      ["page-error"]: pageError_vue_vue_type_script_setup_true_lang.default
    };
    const componentName = vue.computed(() => {
      return atlasEnum[props.svg];
    });
    return () => {
      if (!componentName.value) {
        vue.warn("The svg attributes field passed in is illegal");
      }
      return vue.h(componentName.value, { size: props.size }, slots);
    };
  }
});
exports.default = Atlas;
