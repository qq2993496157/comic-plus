import type { PropType, ExtractPropTypes } from 'vue';

import type { RuleItem } from 'async-validator';

export const formItemProps = {
  label: String,
  labelWidth: String,
  required: Boolean,
  prop: String,
  propIndex: Number,
  rules: [Array, Object] as PropType<RuleItem | RuleItem[]>
} as const;

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
