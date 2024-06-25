import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeKeyProps } from './type';

export type TreeData = Record<string, any>;

type Load = (node: TreeData, _then: (tree: TreeData[]) => void, _catch: () => void) => void;

export const treeProps = {
  data: Array as PropType<TreeData[]>,
  icon: String,
  selection: Boolean,
  lazy: Boolean,
  load: Function as PropType<Load>,
  treeProps: Object as PropType<TreeKeyProps>,
  accordion: Boolean,
  defaultExpandKeys: Array as PropType<number[]>,
  defaultCheckedKeys: Array as PropType<number[]>,
  distinguishClickAndExpand: Boolean,
  defaultExpandAll: Boolean
} as const;

export type TreeProps = ExtractPropTypes<typeof treeProps>;

export const treeEmits = {
  ['node-click']: (node: TreeData, depths: number[]) => true,
  ['node-expand']: (node: TreeData, expand: boolean, depths: number[]) => true
};

export type TreeEmits = ExtractPropTypes<typeof treeEmits>;
