import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createBlock } from "vue";
import "../../style/message-box.css";
import _sfc_main$1 from "./list.vue.mjs";
import { noticeInstances } from "./instance.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuNotice"
  },
  __name: "main",
  props: {
    destroy: Function
  },
  setup(__props) {
    const props = __props;
    const notices = computed(() => {
      return noticeInstances;
    });
    const isLengthZero = computed(() => {
      return notices.value.lt.length === 0 && notices.value.lb.length === 0 && notices.value.rt.length === 0 && notices.value.rb.length === 0;
    });
    function changeLength() {
      var _a;
      if (isLengthZero.value) {
        (_a = props.destroy) == null ? void 0 : _a.call(props);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(notices.value, (value, key) => {
        return openBlock(), createBlock(_sfc_main$1, {
          list: value,
          position: key,
          onEmpty: changeLength
        }, null, 8, ["list", "position"]);
      }), 256);
    };
  }
});
export {
  _sfc_main as default
};
