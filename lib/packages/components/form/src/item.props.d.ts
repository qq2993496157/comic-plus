import { RuleItem } from 'async-validator';
import { PropType, ExtractPropTypes } from 'vue';

export declare const formItemProps: {
    readonly label: StringConstructor;
    readonly labelWidth: StringConstructor;
    readonly required: BooleanConstructor;
    readonly prop: StringConstructor;
    readonly propIndex: NumberConstructor;
    readonly rules: PropType<RuleItem | RuleItem[]>;
};
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
