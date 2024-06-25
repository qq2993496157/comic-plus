import { BreadcrumbProps } from './main.props';
import { InjectionKey } from 'vue';

export type BreadcrumbProvide = {
    props: BreadcrumbProps;
};
export declare const BREADCRUMB_PROVIDE: InjectionKey<BreadcrumbProvide>;
