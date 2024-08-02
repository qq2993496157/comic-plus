import { InjectionKey } from 'vue';
import { TimelineProps } from './main.props';

export type TimelineProvide = {
  props: TimelineProps;
};

export const TIMELINE_PROVIDE: InjectionKey<TimelineProvide> = Symbol('TIMELINE_PROVIDE');
