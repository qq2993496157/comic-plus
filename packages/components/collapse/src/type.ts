import type { Ref, InjectionKey } from 'vue';
import type { CollapseProps } from './main.props';

export type CollapseProvide = {
  props: CollapseProps;
  activeValue: Ref<string[] | string>;
  collapseChange: (show: boolean, name: string) => void;
};

export const COLLAPSE_PROVIDE: InjectionKey<CollapseProvide> = Symbol('COLLAPSE_PROVIDE');
