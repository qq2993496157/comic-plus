import { StepProps } from './main.props';
import { Ref, ComputedRef, InjectionKey } from 'vue';

export type StepProvide = {
    props: StepProps;
    addItem: (uid: number) => void;
    removeItem: (uid: number) => void;
    itemList: Ref<number[]>;
    maxWidth: ComputedRef<number>;
};
export declare const STEP_PROVIDE: InjectionKey<StepProvide>;
