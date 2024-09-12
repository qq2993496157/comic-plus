import { cloneVNode, Comment, defineComponent, Fragment, h, Text, VNode, warn } from 'vue';
import { isObject } from '../../utils';

const wrapTextContent = (s: string | VNode): VNode => {
  return h('span', null, s);
};

const findFirstLegitChild = (node: VNode[] | undefined): VNode | null => {
  if (!node) return null;
  for (const child of node) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case 'svg':
          return wrapTextContent(child);
        case Fragment:
          if ((child.children as VNode[]).length > 1) {
            warn(
              'There can only be one trigger for popover, and any extra triggers will not trigger the effect even if they exist'
            );
          }
          return findFirstLegitChild(child.children as VNode[]);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
};

const OnlyChild = defineComponent({
  name: 'SlotChild',
  setup(_, { slots, attrs }) {
    return () => {
      const defaultSlot = slots.default?.(attrs);
      if (!defaultSlot) return null;
      if (defaultSlot.length > 1) {
        warn(
          'There can only be one trigger for popover, and any extra triggers will not trigger the effect even if they exist'
        );
        return null;
      }
      const firstLegitChild = findFirstLegitChild(defaultSlot);
      if (!firstLegitChild) {
        warn('At least one element is required in the slot of the popover component');
        return null;
      }
      return cloneVNode(firstLegitChild, attrs);
    };
  }
});
export default OnlyChild;
