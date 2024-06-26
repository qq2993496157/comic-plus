import type { PropType, ExtractPropTypes } from 'vue';
import type { ImageFit } from '../../../utils';

export const imageProps = {
  src: String,
  alt: String,
  fit: String as PropType<ImageFit>,
  current: Number,
  loading: {
    type: String as PropType<'eager' | 'lazy'>,
    default: 'eager'
  },
  previewList: Array as PropType<string[]>
} as const;

export type ImageProps = ExtractPropTypes<typeof imageProps>;

export const imageEmits = {
  load: () => true,
  error: () => true
};

export type ImageEmits = typeof imageEmits;
