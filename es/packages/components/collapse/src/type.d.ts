import { CollapseProps } from './main.props';
import { Ref, InjectionKey } from 'vue';

export type CollapseProvide = {
    props: CollapseProps;
    activeValue: Ref<string[] | string>;
    collapseChange: (show: boolean, name: string) => void;
};
export declare const COLLAPSE_PROVIDE: InjectionKey<CollapseProvide>;
