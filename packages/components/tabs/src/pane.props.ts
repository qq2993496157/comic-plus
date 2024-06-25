import type { PropType, ExtractPropTypes } from 'vue';

export const tabPaneProps = {
  name: [String, Number] as PropType<string | number>,
  label: String,
  icon: String
} as const;

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
