import { TreeKeyProps } from './type';
import { ExtractPropTypes, PropType } from 'vue';

export type TreeData = Record<string, any>;
type Load = (node: TreeData, _then: (tree: TreeData[]) => void, _catch: () => void) => void;
export declare const treeProps: {
    readonly data: PropType<TreeData[]>;
    readonly icon: StringConstructor;
    readonly selection: BooleanConstructor;
    readonly lazy: BooleanConstructor;
    readonly load: PropType<Load>;
    readonly treeProps: PropType<TreeKeyProps>;
    readonly accordion: BooleanConstructor;
    readonly defaultExpandKeys: PropType<number[]>;
    readonly defaultCheckedKeys: PropType<number[]>;
    readonly distinguishClickAndExpand: BooleanConstructor;
    readonly defaultExpandAll: BooleanConstructor;
};
export type TreeProps = ExtractPropTypes<typeof treeProps>;
export declare const treeEmits: {
    "node-click": (node: TreeData, depths: number[]) => boolean;
    "node-expand": (node: TreeData, expand: boolean, depths: number[]) => boolean;
};
export type TreeEmits = ExtractPropTypes<typeof treeEmits>;
export {};
