import { InjectionKey } from 'vue';
import type { SelectProps } from './main.props';
import type { OptionProps } from './option.props';
import type { Arrayable } from '../../../utils';

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

export const SELECT_PROVIDE: InjectionKey<SelectProvide> = Symbol('SELECT_PROVIDE');
