import type { ExtractPropTypes } from 'vue';
import { isString } from '../../../utils';
export const listProps = {
  time: String
} as const;
export type ListProps = ExtractPropTypes<typeof listProps>;

export const listEmits = {
  change: (value: string) => isString(value)
};

export type ListEmits = typeof listEmits;
