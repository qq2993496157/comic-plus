import { ref, onBeforeUnmount } from 'vue';

export function useScrollSever(ele: HTMLElement, callback: () => void) {
  const scrollList = ref<HTMLElement[]>([]);

  let parent: any = ele;
  while (parent != null) {
    if (parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) {
      scrollList.value.push(parent);
    }
    parent = parent.parentNode;
  }
  scrollList.value.forEach((el: HTMLElement) => {
    el.addEventListener('scroll', callback);
  });
  window.addEventListener('scroll', callback);

  onBeforeUnmount(() => {
    scrollList.value.forEach((el: HTMLElement) => {
      el.removeEventListener('scroll', callback);
    });
    scrollList.value = [];
    window.removeEventListener('scroll', callback);
  });
}
