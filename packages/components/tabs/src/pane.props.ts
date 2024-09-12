import type { PropType, ExtractPropTypes, Component } from 'vue';

export const tabPaneProps = {
  name: [String, Number] as PropType<string | number>,
  label: String,
  icon: Object as PropType<Component>
} as const;

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
