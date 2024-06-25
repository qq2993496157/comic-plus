export declare function usePopup(props: any, emit?: any): {
    visible: import('vue').Ref<boolean>;
    showMode: import('vue').Ref<boolean>;
    onAfterEnter: () => void;
    modeHandleClick: () => void;
    onAfterLeave: () => void;
    close: () => void;
};
