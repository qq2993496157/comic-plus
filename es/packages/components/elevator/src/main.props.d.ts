import { ComicDisplay } from '../../../utils';
import { ExtractPropTypes, PropType } from 'vue';

export declare const elevatorProps: {
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "100%";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly postion: {
        readonly type: PropType<"none" | "left-top" | "left-bottom" | "right-top" | "right-bottom">;
        readonly default: "right-bottom";
    };
    readonly hasMenu: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly menuSize: {
        readonly type: StringConstructor;
        readonly default: "40px";
    };
    readonly fold: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly scrollbarDisplay: {
        readonly type: PropType<ComicDisplay>;
        readonly default: "always";
    };
};
export type ElevatorProps = ExtractPropTypes<typeof elevatorProps>;
export declare const elevatorEmits: {
    change: (value: string) => boolean;
};
export type ElevatorEmits = typeof elevatorEmits;
