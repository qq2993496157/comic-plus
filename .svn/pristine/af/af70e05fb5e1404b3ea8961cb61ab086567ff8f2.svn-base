import type { ExtractPropTypes, PropType } from 'vue';
import { ImageFit, isBoolean } from '../../../utils';

export const avatarGroupProps = {
  fit: {
    type: String as PropType<ImageFit>,
    default: 'cover'
  },
  size: {
    type: Number,
    default: 40
  },
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle'
  },
  layout: {
    type: String as PropType<'tile' | 'stack'>,
    default: 'stack'
  },
  offset: Number,
  shadow: Boolean,
  count: Number,
  clickShowAll: {
    type: Boolean,
    default: true
  }
} as const;

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

export const avatarGroupEmits = {
  'change-show': (show: boolean) => isBoolean(show)
};

export type AvatarGroupEmits = typeof avatarGroupEmits;
