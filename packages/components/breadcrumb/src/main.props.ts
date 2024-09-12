import { ExtractPropTypes, PropType, Component } from 'vue';

export const breadcrumbProps = {
  separator: {
    type: [String, Object] as PropType<string | Component>
  },
  color: String,
  fill: Boolean,
  closeboth: Boolean
} as const;

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
