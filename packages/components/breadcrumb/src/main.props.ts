import { ExtractPropTypes } from 'vue';

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  },
  separatorIcon: String,
  color: String,
  fill: Boolean,
  closeboth: Boolean
} as const;

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
