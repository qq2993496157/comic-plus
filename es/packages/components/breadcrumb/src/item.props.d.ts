import { RouteLocationRaw } from 'vue-router';
import { PropType, ExtractPropTypes } from 'vue';

export declare const breadcrumbItemProps: {
    readonly to: PropType<RouteLocationRaw>;
    readonly active: BooleanConstructor;
};
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
