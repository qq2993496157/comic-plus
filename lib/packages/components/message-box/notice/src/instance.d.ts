import { NoticeOptions } from './main.props';

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
export declare const noticeInstances: NoticePositionObject;
export declare function instancesAppend(instance: NoticeInstance): void;
export declare function instancesRemove(instance: NoticeInstance): void;
export declare function getNoticeInstanceId(): string;
export {};
