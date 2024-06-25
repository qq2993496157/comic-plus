import { defineComponent, computed, warn, h } from "vue";
import _sfc_main from "../svg/404.vue.mjs";
import _sfc_main$1 from "../svg/500.vue.mjs";
import _sfc_main$2 from "../svg/no-data.vue.mjs";
import _sfc_main$3 from "../svg/no-record.vue.mjs";
import _sfc_main$4 from "../svg/no-premiss.vue.mjs";
import _sfc_main$5 from "../svg/no-collect.vue.mjs";
import _sfc_main$6 from "../svg/no-search.vue.mjs";
import _sfc_main$7 from "../svg/no-message.vue.mjs";
import _sfc_main$9 from "../svg/no-address.vue.mjs";
import _sfc_main$a from "../svg/no-eval.vue.mjs";
import _sfc_main$8 from "../svg/no-web.vue.mjs";
import _sfc_main$b from "../svg/page-error.vue.mjs";
const Atlas = defineComponent({
  name: "CuAtlas",
  components: {
    Atlas404: _sfc_main,
    Atlas500: _sfc_main$1,
    AtlasNoData: _sfc_main$2,
    AtlasNoRecord: _sfc_main$3,
    AtlasNoPremiss: _sfc_main$4,
    AtlasNoCollect: _sfc_main$5,
    AtlasNoSearch: _sfc_main$6,
    AtlasNoMessage: _sfc_main$7,
    AtlasNoWeb: _sfc_main$8,
    AtlasNoAddress: _sfc_main$9,
    AtlasNoEval: _sfc_main$a,
    AtlasPageError: _sfc_main$b
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
      404: _sfc_main,
      500: _sfc_main$1,
      ["no-data"]: _sfc_main$2,
      ["no-record"]: _sfc_main$3,
      ["no-premiss"]: _sfc_main$4,
      ["no-collect"]: _sfc_main$5,
      ["no-search"]: _sfc_main$6,
      ["no-message"]: _sfc_main$7,
      ["no-web"]: _sfc_main$8,
      ["no-address"]: _sfc_main$9,
      ["no-eval"]: _sfc_main$a,
      ["page-error"]: _sfc_main$b
    };
    const componentName = computed(() => {
      return atlasEnum[props.svg];
    });
    return () => {
      if (!componentName.value) {
        warn("The svg attributes field passed in is illegal");
      }
      return h(componentName.value, { size: props.size }, slots);
    };
  }
});
export {
  Atlas as default
};
