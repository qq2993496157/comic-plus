import type { PropType, ExtractPropTypes } from 'vue';

export const countdownProps = {
  value: {
    type: [String, Number] as PropType<string | number>,
    default: 0
  },
  format: {
    type: String,
    default: 'HH:mm:ss'
  },
  prefix: String,
  suffix: String
} as const;

export type CountdownProps = ExtractPropTypes<typeof countdownProps>;

export const countdownEmits = {
  finish: () => true
};

export type CountdownEmits = typeof countdownEmits;
