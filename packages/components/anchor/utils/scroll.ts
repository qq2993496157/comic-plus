import { isClient } from '@vueuse/core';
import { isWindow } from '../../../utils';

const raf = (fn: () => void) =>
  isClient ? window.requestAnimationFrame(fn) : (setTimeout(fn, 16) as unknown as number);

const caf = (handle: number) => (isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle));

function getNextScrollTop(t: number, b: number, c: number, d: number) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  }
  return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}

export function animateScrollTo(container: HTMLElement | Window, from: number, to: number, duration: number) {
  const startTime = Date.now();

  let handle: number | undefined;
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
