"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
var tempId = 1;
const noticeInstances = vue.reactive({
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
exports.getNoticeInstanceId = getNoticeInstanceId;
exports.instancesAppend = instancesAppend;
exports.instancesRemove = instancesRemove;
exports.noticeInstances = noticeInstances;
