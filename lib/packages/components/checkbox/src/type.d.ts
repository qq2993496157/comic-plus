import { ArrayMix, ComicSize } from '../../../utils';
import { Ref, InjectionKey, ComputedRef } from 'vue';

export type CheckboxGroupProvide = {
    activeValue: Ref<ArrayMix<string | number>>;
    changeItemCheck: (check: boolean, value: string | number) => void;
    groupSize: ComputedRef<ComicSize>;
};
export declare const CHECKBOXGROUP_PROVIDE: InjectionKey<CheckboxGroupProvide>;
