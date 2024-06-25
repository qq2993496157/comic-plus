import { RuleItem } from 'async-validator';
import { ComicSize, Arrayable } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

type Rules = {
    trigger?: Arrayable<string>;
} & RuleItem;
export declare const formProps: {
    readonly model: PropType<Record<string, any>>;
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "80px";
    };
    readonly labelPosition: {
        readonly type: PropType<"left" | "right" | "top">;
        readonly default: "right";
    };
    readonly rules: PropType<Rules>;
    readonly size: PropType<ComicSize>;
    readonly hideRequiredAsterisk: BooleanConstructor;
};
export type FormProps = ExtractPropTypes<typeof formProps>;
export {};
