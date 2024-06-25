import type { Ref, ComputedRef, InjectionKey } from 'vue';
import type { StepProps } from './main.props';

export type StepProvide = {
  props: StepProps;
  addItem: (uid: number) => void;
  removeItem: (uid: number) => void;
  itemList: Ref<number[]>;
  maxWidth: ComputedRef<number>;
};

export const STEP_PROVIDE: InjectionKey<StepProvide> = Symbol('STEP_PROVIDE');
