import { ComputedRef, InjectionKey } from 'vue';

export type CarouselProvide = {
    addItem: (uid: number) => void;
    removeItem: (uid: number) => void;
    current: ComputedRef<number>;
};
export declare const CAROUSEL_PROVIDE: InjectionKey<CarouselProvide>;
