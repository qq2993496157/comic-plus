import type { ExtractPropTypes, PropType } from 'vue';
import type { ImageFit } from '../../../utils';

export const avatarProps = {
  src: String,
  fit: String as PropType<ImageFit>,
  size: Number,
  shape: String as PropType<'circle' | 'square'>,
  color: String
} as const;

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
