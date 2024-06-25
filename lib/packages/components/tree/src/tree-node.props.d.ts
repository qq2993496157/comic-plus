import { ChildNodeInstance } from './type';
import { ExtractPropTypes, PropType } from 'vue';

export declare const treeNodeProps: {
    readonly data: ObjectConstructor;
    readonly node: PropType<number[]>;
    readonly parentNode: ObjectConstructor;
};
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
export declare const treeNodeEmits: {
    "push-nodes": (child: ChildNodeInstance) => boolean;
    "change-check": () => boolean;
    "change-show": (uid: number) => boolean;
};
export type TreeNodeEmits = typeof treeNodeEmits;
