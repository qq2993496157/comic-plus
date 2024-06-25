import type { ComputedRef, InjectionKey } from 'vue';

export type CarouselProvide = {
  addItem: (uid: number) => void;
  removeItem: (uid: number) => void;
  current: ComputedRef<number>;
};
export const CAROUSEL_PROVIDE: InjectionKey<CarouselProvide> = Symbol('CAROUSEL_PROVIDE');
