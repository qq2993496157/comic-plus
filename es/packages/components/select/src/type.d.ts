import { Arrayable } from '../../../utils';
import { OptionProps } from './option.props';
import { SelectProps } from './main.props';
import { InjectionKey } from 'vue';

export type SelectValue = Arrayable<string | number>;
export type OptionInstance = {
    key: string | number;
    props: OptionProps;
};
export type SelectProvide = {
    optionClick: (value: string | number) => void;
    addOption: (option: OptionInstance) => void;
    deleteOption: (key: string | number) => void;
    props: SelectProps;
};
export declare const SELECT_PROVIDE: InjectionKey<SelectProvide>;
