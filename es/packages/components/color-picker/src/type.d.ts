import { default as Color } from '../utils/color';
import { ColorPickerProps } from './main.props';
import { Ref, InjectionKey } from 'vue';

export type ColorPickerProvide = {
    props: ColorPickerProps;
    show: Ref<boolean>;
    color: Color;
};
export declare const COLORPICKER_PROVIDE: InjectionKey<ColorPickerProvide>;
