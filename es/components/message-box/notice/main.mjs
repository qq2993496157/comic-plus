import { createVNode, render } from "vue";
import { instancesAppend, getNoticeInstanceId, instancesRemove } from "./src/instance.mjs";
import _sfc_main from "./src/main.vue.mjs";
var noticeBox;
function _notice(props) {
  props = Object.assign(
    {
      position: "rt",
      duration: 3e3,
      showClose: true
    },
    props
  );
  const instance = {
    id: getNoticeInstanceId(),
    props,
    close: () => {
      instancesRemove(instance);
    }
  };
  if (!noticeBox) {
    noticeBox = document.createElement("div");
    const vnode = createVNode(_sfc_main, {
      destroy: () => {
        if (noticeBox) {
          render(null, noticeBox);
          document.body.removeChild(noticeBox);
          noticeBox = null;
        }
      }
    });
    render(vnode, noticeBox);
    instancesAppend(instance);
    document.body.appendChild(noticeBox);
  } else {
    instancesAppend(instance);
  }
}
export {
  _notice as default
};
