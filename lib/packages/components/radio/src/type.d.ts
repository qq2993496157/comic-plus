import { RadioGroupProps } from './group.props';
import { InjectionKey } from 'vue';

export type RadioGroupProvide = {
    changeItemCheck: (value: string | number) => void;
    props: RadioGroupProps;
};
export declare const RADIOGROUP_PROVIDE: InjectionKey<RadioGroupProvide>;
