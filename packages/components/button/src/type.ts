import { InjectionKey } from 'vue';
import type { ButtonGroupProps } from './main.props';

type ButtongroupProvide = {
  props: ButtonGroupProps;
};

export const BUTTONGROUP_PROVIDE: InjectionKey<ButtongroupProvide> = Symbol('BUTTONGROUP_PROVIDE');
