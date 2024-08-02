import { InjectionKey } from 'vue';

export type waterfallProvide = {
  updateStyle: () => void;
};

export const WATERFALL_PROVIDE: InjectionKey<waterfallProvide> = Symbol('WATERFALL_PROVIDE');
