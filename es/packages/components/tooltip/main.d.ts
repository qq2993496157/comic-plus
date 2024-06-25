import { ObjectDirective, App } from 'vue';

declare const useTooltip: () => ObjectDirective;
declare const vTooltip: {
    install: (app: App) => void;
};
export { useTooltip, vTooltip };
