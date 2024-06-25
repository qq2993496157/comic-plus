import type { ExtractPropTypes, PropType } from 'vue';
import type { ChildNodeInstance } from './type';

export const treeNodeProps = {
  data: Object,
  node: Array as PropType<number[]>,
  parentNode: Object
} as const;

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;

export const treeNodeEmits = {
  ['push-nodes']: (child: ChildNodeInstance) => true,
  ['change-check']: () => true,
  ['change-show']: (uid: number) => true
};

export type TreeNodeEmits = typeof treeNodeEmits;
