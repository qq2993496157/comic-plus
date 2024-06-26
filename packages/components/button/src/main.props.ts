import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicType, ComicSize } from '../../../utils';

export const buttonProps = {
  type: String as PropType<ComicType>,
  size: String as PropType<ComicSize>,
  disabled: Boolean,
  plain: Boolean,
  icon: String,
  round: Boolean,
  circle: Boolean,
  color: String,
  loading: Boolean,
  loadingIcon: String
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type ButtonEmits = typeof buttonEmits;

export const buttonGroupProps = {
  round: Boolean,
  size: String as PropType<ComicSize>
};

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
