import "vue";
import "../utils/config.mjs";
const deepMerge = (target, source) => {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object) {
        if (!target[key])
          Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
};
const chunkArray = (value, length) => {
  const result = [];
  for (let i = 0; i < value.length; i += length) {
    const chunk = value.slice(i, i + length);
    result.push(chunk);
  }
  return result;
};
const copyToClipboard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "absolute";
    textArea.style.opacity = "0";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
};
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
};
const randomUid = () => {
  return Math.random().toString(36).slice(2) + Date.now();
};
function parity(num) {
  return num % 2 !== 0;
}
export {
  chunkArray,
  copyToClipboard,
  deepMerge,
  parity,
  randomColor,
  randomUid
};
