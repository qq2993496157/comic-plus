import { RateProps } from './main.props';
import { InjectionKey, Ref, ComputedRef } from 'vue';

export type RateProvide = {
    props: RateProps;
    activeIdx: Ref<number>;
    activeColor: ComputedRef<string>;
};
export declare const RATE_PROVIDE: InjectionKey<RateProvide>;
