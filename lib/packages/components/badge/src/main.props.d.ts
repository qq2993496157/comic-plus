import { ComicType } from '../../../utils';
import { PropType, ExtractPropTypes } from 'vue';

export declare const badgeProps: {
    readonly value: PropType<string | number>;
    readonly dot: BooleanConstructor;
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 99;
    };
    readonly type: {
        readonly type: PropType<ComicType>;
        readonly default: "danger";
    };
    readonly color: StringConstructor;
    readonly zeroShow: BooleanConstructor;
    readonly ellipsis: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly offset: PropType<number | number[]>;
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
