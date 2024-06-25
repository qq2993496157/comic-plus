import { isClient } from "@vueuse/core";
import "vue";
import { isWindow } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const raf = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const caf = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
function getNextScrollTop(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
function animateScrollTo(container, from, to, duration) {
  const startTime = Date.now();
  let handle;
  const scroll = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nst = getNextScrollTop(time > duration ? duration : time, from, to, duration);
    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nst);
    } else {
      container.scrollTop = nst;
    }
    if (time < duration) {
      handle = raf(scroll);
    }
  };
  scroll();
  return () => {
    handle && caf(handle);
  };
}
export {
  animateScrollTo
};
