import { ComputedRef, InjectionKey } from 'vue';

export type AtlasProvide = {
  color: ComputedRef<string>;
  colorLight: ComputedRef<string>;
};

export const ATLAS_PROVIDE: InjectionKey<AtlasProvide> = Symbol('ATLAS_PROVIDE');
