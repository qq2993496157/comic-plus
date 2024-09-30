import { InjectionKey, Ref } from 'vue';

export type waterfallProvide = {
  updateStyle: () => void;
};

export const WATERFALL_PROVIDE: InjectionKey<waterfallProvide> = Symbol('WATERFALL_PROVIDE');
