import type { InjectionKey } from 'vue';
import type { TreeProps } from './main.props';
import type { TreeNodeProps } from './tree-node.props';

export type TreeProvide = {
  props: TreeProps;
  nodeKeys: TreeKeyProps;
  nodeClick: (node: any, depths: number[]) => void;
  nodeExpanded: (node: any, expand: boolean, depths: number[]) => void;
  BUS_EVENT: { SET_NODES: string; SET_KEYS: string };
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

export const TREE_PROVIDE: InjectionKey<TreeProvide> = Symbol('TREE_PROVIDE');
