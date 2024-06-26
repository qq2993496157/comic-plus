import type { ExtractPropTypes } from 'vue';

export const containerCommonProps = {
  height: String
};
export type ContainerCommonProps = ExtractPropTypes<typeof containerCommonProps>;

export const asideProps = {
  ...containerCommonProps,
  width: String
};

export type AsideProps = ExtractPropTypes<typeof asideProps>;
