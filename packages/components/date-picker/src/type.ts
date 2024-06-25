import { InjectionKey, Ref } from 'vue';
import { DatePickerProps } from './main.props';

export type ValueType = Date | string | number | Date[] | string[] | number[];
export type ValueAlone = Date | string | number;

export type Shortcut = {
  label: string;
  value: ValueType | (() => ValueType);
};

type DatePickerProvide = {
  props: DatePickerProps;
  show: Ref<boolean>;
  confirm: (datenum: number | number[]) => void;
};

export const DATEPICKER_PROVIDE: InjectionKey<DatePickerProvide> = Symbol('DATEPICKER_PROVIDE');
