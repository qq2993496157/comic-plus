import { Fragment } from 'vue';

const filterEmpty = (children: any[]) => {
  const res = [] as any[];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if (child.type === Fragment) {
      res.push(...child.children);
    } else {
      res.push(child);
    }
  });
  return res.filter((c) => !isEmptyElement(c));
};

const isEmptyElement = (c: any): boolean => {
  return (
    c &&
    (c.type === Comment ||
      (c.type === Fragment && c.children.length === 0) ||
      (c.type === Text && c.children.trim() === ''))
  );
};

function hasClass(el: HTMLElement, className: string) {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
  return reg.test(el.className);
}

const addClass = (el: HTMLElement, className: string) => {
  if (hasClass(el, className)) return;
  const newClass = el.className.split(/\s+/);
  newClass.push(className);
  el.className = newClass.join(' ');
};

const removeClass = (el: HTMLElement, className: string) => {
  if (hasClass(el, className)) {
    const newClass = el.className.split(/\s+/).filter((name) => name !== className);
    el.className = newClass.join(' ');
  }
};

export { filterEmpty, addClass, removeClass };
