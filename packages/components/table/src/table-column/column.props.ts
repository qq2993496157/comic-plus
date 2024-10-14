import { ExtractPropTypes, PropType } from 'vue';

export const tableColumnProps = {
  type: {
    type: String as PropType<'selection' | 'index' | 'expand' | 'default'>,
    default: 'default'
  },
  prop: String,
  label: String,
  align: String as PropType<'left' | 'right' | 'center'>,
  width: {
    type: String,
    default: (value: any) => {
      //由于type设置了默认值，因此 width需要放在type下面，否则当前的value中的type会永远是default
      return ['expand', 'index', 'selection'].includes(value.type) ? '50' : null;
    }
  },
  fixed: [Boolean, String] as PropType<boolean | 'left' | 'right'>,
  index: [Number, Function] as PropType<number | ((rowIndex: number) => any)>
} as const;

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
