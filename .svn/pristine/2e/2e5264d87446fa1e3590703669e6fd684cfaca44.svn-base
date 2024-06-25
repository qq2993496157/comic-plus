import type { PropType, ExtractPropTypes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const breadcrumbItemProps = {
  to: [String, Object] as PropType<RouteLocationRaw>,
  active: Boolean
} as const;

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
