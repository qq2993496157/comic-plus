import { InjectionKey } from 'vue';

export type ElevatorItemInstance = {
    name: string;
    label: string;
    uid: number;
};
export type ElevatorProvide = {
    setItem: (instance: ElevatorItemInstance) => void;
    removeItem: (uid: number) => void;
};
export declare const ELEVATOR_PROVIDE: InjectionKey<ElevatorProvide>;
