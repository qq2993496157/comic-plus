import { ComicDir } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const stepProps: {
    readonly direction: {
        readonly type: PropType<ComicDir>;
        readonly default: "horizontal";
    };
    readonly active: NumberConstructor;
    readonly center: BooleanConstructor;
    readonly activeColor: StringConstructor;
};
export type StepProps = ExtractPropTypes<typeof stepProps>;
