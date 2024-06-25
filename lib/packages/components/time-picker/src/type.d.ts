import { TimePickerProps } from './main.props';
import { InjectionKey, Ref } from 'vue';

type TimePickerProvide = {
    props: TimePickerProps;
    show: Ref<boolean>;
    confirm: (time: string | string[]) => void;
};
export declare const TIMEPICKER_PROVIDE: InjectionKey<TimePickerProvide>;
export {};
