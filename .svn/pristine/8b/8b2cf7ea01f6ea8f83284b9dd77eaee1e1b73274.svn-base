import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicDir } from '../../../utils';

export const zoneProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: 0.5
  },
  mode: {
    type: String as PropType<ComicDir>,
    default: 'horizontal'
  },
  lineWeight: {
    type: Number,
    default: 6
  },
  min: {
    type: [String, Number] as PropType<string | number>,
    default: '40px'
  },
  max: {
    type: [String, Number] as PropType<string | number>,
    default: '40px'
  }
} as const;

export type ZoneProps = ExtractPropTypes<typeof zoneProps>;

export const zoneEmits = {
  ['update:modelValue']: (val: string | number) => ['string', 'number'].includes(typeof val),
  ['drag-start']: () => true,
  ['drag']: (evt: MouseEvent) => evt instanceof MouseEvent,
  ['drag-end']: () => true
};

export type ZoneEmits = ExtractPropTypes<typeof zoneEmits>;
