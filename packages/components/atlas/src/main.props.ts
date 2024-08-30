import type { ExtractPropTypes, PropType } from 'vue';

export const atlasProps = {
  svg: String,
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 200
  },
  color: String
} as const;

export type AtlasProps = ExtractPropTypes<typeof atlasProps>;
