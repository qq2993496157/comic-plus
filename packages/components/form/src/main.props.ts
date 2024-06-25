import type { ExtractPropTypes, PropType } from 'vue';
import type { ComicSize, Arrayable } from '../../../utils';
import type { RuleItem } from 'async-validator';

type Rules = {
  trigger?: Arrayable<string>;
} & RuleItem;

export const formProps = {
  model: Object as PropType<Record<string, any>>,
  labelWidth: {
    type: String,
    default: '80px'
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right'
  },
  rules: Object as PropType<Rules>,
  size: String as PropType<ComicSize>,
  hideRequiredAsterisk: Boolean
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;
