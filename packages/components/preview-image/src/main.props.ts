import type { PropType, ExtractPropTypes } from 'vue';

export const previewImageProps = {
  current: Number,
  list: {
    type: Array as PropType<string[]>,
    required: true
  },
  destroy: Function
} as const;

export type PreviewImageProps = ExtractPropTypes<typeof previewImageProps>;
