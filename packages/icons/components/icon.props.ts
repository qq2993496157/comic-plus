import { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
