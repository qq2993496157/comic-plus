import type { InjectionKey } from 'vue';
import type { BreadcrumbProps } from './main.props';

export type BreadcrumbProvide = {
  props: BreadcrumbProps;
};

export const BREADCRUMB_PROVIDE: InjectionKey<BreadcrumbProvide> = Symbol('BREADCRUMB_PROVIDE');
