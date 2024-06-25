import { SetupContext } from 'vue';
import { RadioProps, RadioEmits } from './main.props';

export declare const useRadio: (props: RadioProps, emit: SetupContext<RadioEmits>['emit']) => {
    currentSize: import('vue').ComputedRef<string>;
    isCheck: import('vue').ComputedRef<boolean>;
    changeValue: () => void;
};
