import { CSSProperties, Ref, onMounted, onUnmounted } from 'vue';

type MaybeElement = Ref<HTMLElement>;

function reRendering(mutation: MutationRecord, watermarkElement: HTMLElement) {
  let flag = false;
  if (mutation.removedNodes.length) {
    flag = Array.from(mutation.removedNodes).some((node) => node === watermarkElement);
  }
  if (mutation.type === 'attributes' && mutation.target === watermarkElement) {
    flag = true;
  }

  return flag;
}

const toLowercaseSeparator = (key: string) => key.replace(/([A-Z])/g, '-$1').toLowerCase();

export const getStyleStr = (style: CSSProperties) =>
  Object.keys(style)
    .map((key) => `${toLowercaseSeparator(key)}: ${style[key]};`)
    .join(' ');

export const getPixelRatio = () => window.devicePixelRatio || 1;

export const useMutationObserver = (
  target: MaybeElement,
  callback: (...args: any) => void,
  options: MutationObserverInit
) => {
  var ob: MutationObserver | null;

  function createObserver() {
    const isSupported = typeof MutationObserver !== 'undefined';
    if (!isSupported) return false;
    ob = new MutationObserver(onMutate);
    ob.observe(target.value, options);
  }

  function onMutate(records: MutationRecord[]) {
    records.forEach((mutation) => {
      if (!reRendering(mutation, target.value)) return;
      callback();
    });
  }

  function disconnect() {
    ob.disconnect();
    ob = null;
  }

  onMounted(() => {
    createObserver();
  });

  onUnmounted(() => {
    disconnect();
  });

  // return {
  //   disconnect
  // }
};
