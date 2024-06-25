import type { Ref, InjectionKey, ComputedRef } from 'vue';
import type { ArrayMix, ComicSize } from '../../../utils';

export type CheckboxGroupProvide = {
  activeValue: Ref<ArrayMix<string | number>>;
  changeItemCheck: (check: boolean, value: string | number) => void;
  groupSize: ComputedRef<ComicSize>;
};

export const CHECKBOXGROUP_PROVIDE: InjectionKey<CheckboxGroupProvide> = Symbol('CHECKBOXGROUP_PROVIDE');
