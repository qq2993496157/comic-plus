import { watch } from 'vue';
import type { Ref } from 'vue';

export function useLookScroll(trigger: Ref<boolean>) {
  let recordParentWidth = null;
  let recordOverflow = null;

  function getScrollbarWidth() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  function disableScroll(): void {
    recordParentWidth = document.body.style.getPropertyValue('width');
    recordOverflow = document.body.style.getPropertyValue('overflow');

    var scrollWidth = getScrollbarWidth();

    document.body.style.setProperty('overflow', 'hidden');
    document.body.style.setProperty('width', `calc(100% - ${scrollWidth}px)`);
  }

  function enableScroll(): void {
    document.body.style.setProperty('overflow', recordOverflow);
    if (recordParentWidth) {
      document.body.style.setProperty('width', recordParentWidth);
    } else {
      document.body.style.removeProperty('width');
    }
  }

  watch(trigger, (val) => {
    val && disableScroll();
    !val && enableScroll();
  });
}
