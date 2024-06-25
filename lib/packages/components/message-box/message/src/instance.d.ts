import { VNode, ComponentInternalInstance } from 'vue';

export type MessageInstance = {
    id: string;
    vnode: VNode;
    vm: ComponentInternalInstance;
};
export declare const messageInstances: MessageInstance[];
export declare function instancesAppend(instance: MessageInstance): void;
export declare function instancesRemove(id: string): void;
export declare function getMessageInstanceId(): string;
export declare function getOffset(id: string): number;
