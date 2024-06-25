import { ComicDir } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const zoneProps: {
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: 0.5;
    };
    readonly mode: {
        readonly type: PropType<ComicDir>;
        readonly default: "horizontal";
    };
    readonly lineWeight: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly min: {
        readonly type: PropType<string | number>;
        readonly default: "40px";
    };
    readonly max: {
        readonly type: PropType<string | number>;
        readonly default: "40px";
    };
};
export type ZoneProps = ExtractPropTypes<typeof zoneProps>;
export declare const zoneEmits: {
    "update:modelValue": (val: string | number) => boolean;
    "drag-start": () => boolean;
    drag: (evt: MouseEvent) => boolean;
    "drag-end": () => boolean;
};
export type ZoneEmits = ExtractPropTypes<typeof zoneEmits>;
