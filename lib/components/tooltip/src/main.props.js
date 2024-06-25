"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const OFFSET = 8;
const calcPosition = {
  "top-start": (target, parent) => {
    return {
      x: parent.left,
      y: parent.top - target.height - OFFSET
    };
  },
  "top-center": (target, parent) => {
    return {
      x: parent.left - target.width / 2 + parent.width / 2,
      y: parent.top - target.height - OFFSET
    };
  },
  "top-end": (target, parent) => {
    return {
      x: parent.left + parent.width - target.width,
      y: parent.top - target.height - OFFSET
    };
  },
  "right-start": (target, parent) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top
    };
  },
  "right-center": (target, parent) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top + parent.height / 2 - target.height / 2
    };
  },
  "right-end": (target, parent) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top + parent.height - target.height
    };
  },
  "bottom-start": (target, parent) => {
    return {
      x: parent.left,
      y: parent.top + parent.height + OFFSET
    };
  },
  "bottom-center": (target, parent) => {
    return {
      x: parent.left - target.width / 2 + parent.width / 2,
      y: parent.top + parent.height + OFFSET
    };
  },
  "bottom-end": (target, parent) => {
    return {
      x: parent.left + parent.width - target.width,
      y: parent.top + parent.height + OFFSET
    };
  },
  "left-start": (target, parent) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top
    };
  },
  "left-center": (target, parent) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top + parent.height / 2 - target.height / 2
    };
  },
  "left-end": (target, parent) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top + parent.height - target.height
    };
  }
};
const tooltipProps = {
  content: String,
  position: {
    type: String,
    default: "top-center"
  },
  triggerRef: HTMLElement
};
exports.calcPosition = calcPosition;
exports.tooltipProps = tooltipProps;
