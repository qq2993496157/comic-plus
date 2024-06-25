import { StepItemProps } from './item.props';

export declare const useStepItem: (props: StepItemProps) => {
    instance: import('vue').ComponentInternalInstance;
    injectProps: import('./main.props').StepProps;
    addItem: (uid: number) => void;
    removeItem: (uid: number) => void;
    itemList: import('vue').Ref<number[]>;
    isFinish: import('vue').ComputedRef<boolean>;
    isCurrent: import('vue').ComputedRef<boolean>;
    currentIndex: import('vue').ComputedRef<number>;
    currentIcon: import('vue').ComputedRef<string | false>;
    maxWidth: import('vue').ComputedRef<number>;
};
