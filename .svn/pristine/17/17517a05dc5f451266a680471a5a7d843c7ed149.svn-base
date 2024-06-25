import { InjectionKey, Ref } from 'vue';
import { TimePickerProps } from './main.props';

type TimePickerProvide = {
  props: TimePickerProps;
  show: Ref<boolean>;
  confirm: (time: string | string[]) => void;
};

export const TIMEPICKER_PROVIDE: InjectionKey<TimePickerProvide> = Symbol('TIMEPICKER_PROVIDE');
