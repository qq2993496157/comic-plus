import type { ExtractPropTypes } from 'vue';

export const tagComplexProps = {
  type: String,
  size: {
    type: Number,
    default: 22
  },
  closable: Boolean,
  transition: Boolean,
  color: String,
  title: String,
  round: Boolean
} as const;
export type TagComplexProps = ExtractPropTypes<typeof tagComplexProps>;

export const tagComplexEmits = {
  close: () => true
};

export type TagComplexEmits = typeof tagComplexEmits;
