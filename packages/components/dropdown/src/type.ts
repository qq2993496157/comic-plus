import type { InjectionKey } from 'vue';

export type DropdownProvide = {
  choose: (sign: string) => void;
};

export const DROPDOWN_PROVIDE: InjectionKey<DropdownProvide> = Symbol('DROPDOWN_PROVIDE');
