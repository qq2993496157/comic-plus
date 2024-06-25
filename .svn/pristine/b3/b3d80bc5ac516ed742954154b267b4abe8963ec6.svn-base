import type { InjectionKey } from 'vue';

export type ElevatorItemInstance = {
  name: string;
  label: string;
  uid: number;
};

export type ElevatorProvide = {
  setItem: (instance: ElevatorItemInstance) => void;
  removeItem: (uid: number) => void;
};

export const ELEVATOR_PROVIDE: InjectionKey<ElevatorProvide> = Symbol('ELEVATOR_PROVIDE');
