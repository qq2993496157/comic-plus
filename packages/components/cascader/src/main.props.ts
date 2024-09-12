import type { PropType, ExtractPropTypes } from 'vue';
import type { ComicSize } from '../../../utils';

export type Prop = {
  children?: string;
  label?: string;
  value?: string;
  separator?: string;
};

export type CascaderChilds = {
  label?: string;
  value?: string;
  children?: CascaderChilds;
  disabled?: boolean;
  [key: string]: any;
}[];

export const cascaderProps = {
  modelValue: {
    type: Array as PropType<any[]>,
    default: []
  },
  options: {
    type: Array as PropType<CascaderChilds>,
    default: []
  },
  size: String as PropType<ComicSize>,
  disabled: Boolean,
  clearable: Boolean,
  arbitrarily: Boolean,
  placeholder: String,
  prop: {
    type: Object as PropType<Prop>,
    default: () => {
      return {
        children: 'children',
        label: 'label',
        value: 'value',
        separator: '/'
      };
    }
  }
} as const;

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;

export const cascaderEmits = {
  ['update:modelValue']: (val: any[]) => Array.isArray(val),
  change: (val: any[]) => Array.isArray(val),
  clear: () => true
};

export type CascaderEmits = typeof cascaderEmits;
