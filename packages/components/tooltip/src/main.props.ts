import type { ExtractDefaultPropTypes, PropType } from 'vue';

export type Position =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'left-start'
  | 'left-center'
  | 'left-end'
  | 'right-start'
  | 'right-center'
  | 'right-end';

const OFFSET = 8;

export const calcPosition = {
  'top-start': (target: any, parent: any) => {
    return {
      x: parent.left,
      y: parent.top - target.height - OFFSET
    };
  },
  'top-center': (target: any, parent: any) => {
    return {
      x: parent.left - target.width / 2 + parent.width / 2,
      y: parent.top - target.height - OFFSET
    };
  },
  'top-end': (target: any, parent: any) => {
    return {
      x: parent.left + parent.width - target.width,
      y: parent.top - target.height - OFFSET
    };
  },
  'right-start': (target: any, parent: any) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top
    };
  },
  'right-center': (target: any, parent: any) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top + parent.height / 2 - target.height / 2
    };
  },
  'right-end': (target: any, parent: any) => {
    return {
      x: parent.left + parent.width + OFFSET,
      y: parent.top + parent.height - target.height
    };
  },
  'bottom-start': (target: any, parent: any) => {
    return {
      x: parent.left,
      y: parent.top + parent.height + OFFSET
    };
  },
  'bottom-center': (target: any, parent: any) => {
    return {
      x: parent.left - target.width / 2 + parent.width / 2,
      y: parent.top + parent.height + OFFSET
    };
  },
  'bottom-end': (target: any, parent: any) => {
    return {
      x: parent.left + parent.width - target.width,
      y: parent.top + parent.height + OFFSET
    };
  },
  'left-start': (target: any, parent: any) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top
    };
  },
  'left-center': (target: any, parent: any) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top + parent.height / 2 - target.height / 2
    };
  },
  'left-end': (target: any, parent: any) => {
    return {
      x: parent.left - target.width - OFFSET,
      y: parent.top + parent.height - target.height
    };
  }
};

export const tooltipProps = {
  content: String,
  position: {
    type: String as PropType<Position>,
    default: 'top-center'
  },
  triggerRef: HTMLElement
} as const;

export type TooltipProps = ExtractDefaultPropTypes<typeof tooltipProps>;
