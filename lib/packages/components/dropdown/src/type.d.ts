import { InjectionKey } from 'vue';

export type DropdownProvide = {
    choose: (sign: string) => void;
};
export declare const DROPDOWN_PROVIDE: InjectionKey<DropdownProvide>;
