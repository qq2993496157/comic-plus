import { ExtractPropTypes, PropType } from 'vue';

type Font = {
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  color?: string;
};

export const watermarkProps = {
  width: Number,
  height: Number,
  image: String,
  content: [String, Array] as PropType<string | string[]>,
  font: Object as PropType<Font>,
  zIndex: {
    type: Number,
    default: 9
  },
  rotate: {
    type: Number,
    default: -20
  },
  gap: {
    type: Array as PropType<number[]>,
    default: [100, 100]
  },
  offset: {
    type: Array as PropType<number[]>,
    default: [0, 0]
  }
} as const;

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;
