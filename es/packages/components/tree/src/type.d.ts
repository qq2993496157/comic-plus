import { TreeNodeProps } from './tree-node.props';
import { TreeProps } from './main.props';
import { InjectionKey } from 'vue';

export type TreeProvide = {
    props: TreeProps;
    nodeKeys: TreeKeyProps;
    nodeClick: (node: any, depths: number[]) => void;
    nodeExpanded: (node: any, expand: boolean, depths: number[]) => void;
    BUS_EVENT: {
        SET_NODES: string;
        SET_KEYS: string;
    };
};
export type ChildNodeInstance = {
    uid: number;
    _childChange: (value: boolean) => void;
    indeterminate: any;
    checked: any;
    _accordionChangeShow: (uid: number) => void;
    disabled: boolean;
    childNodes: ChildNodeInstance[];
    getCuurentNodeInfo: () => TreeNodeProps['data'];
};
export type TreeKeyProps = {
    label?: string;
    id?: string;
    children?: string;
};
export declare const TREE_PROVIDE: InjectionKey<TreeProvide>;
