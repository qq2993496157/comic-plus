import { reactive } from 'vue';
import type { NoticeOptions } from './main.props';

var tempId = 1;

export type NoticeInstance = {
  id: string;
  props: NoticeOptions;
  close: (insttance?: NoticeInstance) => void;
};

type NoticePositionObject = {
  lt: NoticeInstance[];
  lb: NoticeInstance[];
  rt: NoticeInstance[];
  rb: NoticeInstance[];
};

export const noticeInstances: NoticePositionObject = reactive({
  lt: [],
  lb: [],
  rt: [],
  rb: []
});

export function instancesAppend(instance: NoticeInstance) {
  const { props } = instance;
  if (props.position === 'lt' || props.position === 'rt') {
    noticeInstances[props.position].push(instance);
  } else {
    noticeInstances[props.position].unshift(instance);
  }
  if (props.duration === -1) return;
  let timer: any = setTimeout(() => {
    instance.close(instance);
    clearTimeout(timer);
    timer = undefined;
  }, props.duration);
}

export function instancesRemove(instance: NoticeInstance) {
  const { props, id } = instance;
  if (noticeInstances[props.position]) {
    let idx = noticeInstances[props.position].findIndex((v: NoticeInstance) => v.id === id);
    idx >= 0 && noticeInstances[props.position].splice(idx, 1);
  }
}

export function getNoticeInstanceId() {
  return 'notice_' + tempId++;
}
