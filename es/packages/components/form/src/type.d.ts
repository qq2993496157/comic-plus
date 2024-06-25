import { FormProps } from './main.props';
import { InjectionKey } from 'vue';

type Values = Record<string, any>;
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
export declare const FORM_PROVIDE: InjectionKey<FormProvide>;
export type FormItemProvide = {
    trigger: string | string[];
    fn: () => true | Promise<Values>;
};
export declare const FORMITEM_PROVIDE: InjectionKey<FormItemProvide>;
export {};
