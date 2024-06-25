import type { InjectionKey } from 'vue';
import type { FormProps } from './main.props';

type Values =  Record<string, any>

export type ItemInfoProp = {
  uid: number;
  prop: string;
  validate: () => true | Promise<Values>;
  clearValidate: () => void;
};

export type FormProvide = {
  props: FormProps;
  itemValidatePush: (item: ItemInfoProp) => void;
  itemValidateDelete: (uid: number) => void;
};

export const FORM_PROVIDE: InjectionKey<FormProvide> = Symbol('FORM_PROVIDE');

export type FormItemProvide = {
  trigger: string | string[];
  fn: () => true | Promise<Values>;
};

export const FORMITEM_PROVIDE: InjectionKey<FormItemProvide> = Symbol('FORMITEM_PROVIDE');
