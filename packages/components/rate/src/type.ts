import { InjectionKey, Ref, ComputedRef } from 'vue';
import { RateProps } from './main.props';

export type RateProvide = {
  props: RateProps;
  activeIdx: Ref<number>;
  activeColor: ComputedRef<string>;
};

export const RATE_PROVIDE: InjectionKey<RateProvide> = Symbol('RATE_PROVIDE');
