import { reactive } from "vue";
var tempId = 1;
const noticeInstances = reactive({
  lt: [],
  lb: [],
  rt: [],
  rb: []
});
function instancesAppend(instance) {
  const { props } = instance;
  if (props.position === "lt" || props.position === "rt") {
    noticeInstances[props.position].push(instance);
  } else {
    noticeInstances[props.position].unshift(instance);
  }
  if (props.duration === -1)
    return;
  let timer = setTimeout(() => {
    instance.close(instance);
    clearTimeout(timer);
    timer = void 0;
  }, props.duration);
}
function instancesRemove(instance) {
  const { props, id } = instance;
  if (noticeInstances[props.position]) {
    let idx = noticeInstances[props.position].findIndex((v) => v.id === id);
    idx >= 0 && noticeInstances[props.position].splice(idx, 1);
  }
}
function getNoticeInstanceId() {
  return "notice_" + tempId++;
}
export {
  getNoticeInstanceId,
  instancesAppend,
  instancesRemove,
  noticeInstances
};
