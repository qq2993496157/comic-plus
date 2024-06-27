import { ComputedRef, InjectionKey, Ref, CSSProperties } from 'vue';
import { SliderProps } from './main.props';

type Mark = {
  label: string;
  position: 'top' | 'bottom';
  style?: CSSProperties;
};

export type Marks = {
  [key: number]: string | Mark;
};

export type SliderProvide = {
  props: SliderProps;
  containerRef: Ref<HTMLElement>;
  sliderValue: ComputedRef<number>;
  sliderValue2: ComputedRef<number>;
  updateValue: () => void;
};

export const SLIDER_PROVIDE: InjectionKey<SliderProvide> = Symbol('SLIDER_PROVIDE');
