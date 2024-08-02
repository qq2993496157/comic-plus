import { computed } from 'vue';
import type { ComponentInternalInstance, Ref } from 'vue';

export function useMenu(instance: ComponentInternalInstance, currentIndex?: Ref<string>) {
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && parent.type.name! !== 'CuSubMenu') {
      parent = parent.parent;
    }
    return parent!;
  });

  return {
    parentMenu
  };
}
